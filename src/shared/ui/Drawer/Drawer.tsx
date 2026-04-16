import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import { Overlay } from 'shared/ui/Overlay';
import { useModal } from 'shared/lib/hooks/useModal';
import cls from './Drawer.module.scss';

type DrawerProps = {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, isOpen, onClose, children,
        lazy = true,
    } = props;
    const { theme } = useTheme();

    const { close, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    } as const satisfies Mods;

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
