import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {FC} from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import {Button, ThemeButton} from "shared/ui/Button/Button";

// export enum S {
//     CLEAR = 'clear',
// }

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
    const { className} = props;
    const { theme, themeToggle } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={themeToggle}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};
