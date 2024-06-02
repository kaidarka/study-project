import {
    memo, MutableRefObject, ReactNode, UIEventHandler, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ScrollSliceActions } from 'widgets/Page/model/slices/ScrollSlice';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollByPath } from 'widgets/Page/model/selectors/scroll';
import { StateSchema } from 'app/providers/StoreProvider';
import { useMountEffect } from 'shared/lib/hooks/useMountEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import cls from './Page.module.scss';

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: IPageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useMountEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll: UIEventHandler<HTMLElement> = useThrottle((e) => {
        dispatch(ScrollSliceActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </section>
    );
});
