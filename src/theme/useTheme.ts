import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    themeToggle: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme ,setTheme} = useContext(ThemeContext);

    const themeToggle = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {theme, themeToggle};
}
