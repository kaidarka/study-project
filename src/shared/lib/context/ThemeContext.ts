import { Theme } from '@/shared/const/theme';
import { createContext } from 'react';

export interface IThemeContextProps {
    theme?: typeof Theme[keyof typeof Theme];
    setTheme?: (theme: typeof Theme[keyof typeof Theme]) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

