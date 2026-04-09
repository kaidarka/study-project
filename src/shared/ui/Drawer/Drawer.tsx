import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import { Overlay } from 'shared/ui/Overlay';
import cls from './Drawer.module.scss';

type DrawerProps = {
className?: string;
isOpen: boolean;
onClose: () => void;
children: React.ReactNode;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, isOpen, onClose, children,
    } = props;
    const { theme } = useTheme();
    const mods = {
        [cls.opened]: isOpen,
    } as const satisfies Mods;

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
