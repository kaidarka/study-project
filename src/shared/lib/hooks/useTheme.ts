import { Theme } from '@/shared/const/theme';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface IUseThemeResult {
    themeToggle: () => void;
    theme: typeof Theme[keyof typeof Theme];
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeToggle = () => {
        let newTheme;
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
