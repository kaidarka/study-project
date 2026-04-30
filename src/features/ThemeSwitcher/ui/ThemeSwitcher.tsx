import { memo, useCallback } from 'react';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/redesigned/Icon';

export const ThemeSwitcher = memo(() => {
    const { themeToggle } = useTheme();
    const dispatch = useAppDispatch();
    ThemeIcon;
    const onToggleHandler = useCallback(() => {
        themeToggle((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, themeToggle]);

    return <Icon Svg={ThemeIcon} onClick={onToggleHandler} width={24} height={24} />;
});
