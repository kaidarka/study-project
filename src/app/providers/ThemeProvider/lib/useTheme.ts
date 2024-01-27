import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
    themeToggle: () => void;
    theme: Theme;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeToggle = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.RED;
            break;
        case Theme.RED:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
            break;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.LIGHT, themeToggle };
}
