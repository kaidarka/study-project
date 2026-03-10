import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Popup.module.scss';

interface PopupProps {
    className?: string;
}

export const Popup = memo((props: PopupProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Popup, {}, [className])}>
            {/* Content */}
        </div>
    );
});
