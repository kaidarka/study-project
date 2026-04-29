import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import DeprecatedLightIcon from '@/shared/assets/icons/theme-light.svg?react';
import DeprecatedDarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, themeToggle } = useTheme();
    const dispatch = useAppDispatch();
    ThemeIcon;
    const onToggleHandler = useCallback(() => {
        themeToggle((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, themeToggle]);

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={<Icon Svg={ThemeIcon} onClick={onToggleHandler} width={24} height={24} />}
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    {theme === Theme.DARK ? <DeprecatedDarkIcon /> : <DeprecatedLightIcon />}
                </ButtonDeprecated>
            }
        />
    );
});
