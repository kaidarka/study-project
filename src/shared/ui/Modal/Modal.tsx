import React, {
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Portal } from '../../ui/Portal';
import { Overlay } from '../../ui/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal';
import cls from './Modal.module.scss';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: IModalProps) => {
    const {
        className, children, isOpen = false, onClose, lazy,
    } = props;

    const { close, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        animationDelay: 100,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [className])}
            >
                <Overlay onClick={close} />
                <div
                    className={
                        classNames(
                            cls.content,
                            { [cls.contentOpened]: isOpen },
                            ['app_modal'],
                        )
                    }
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
