import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as (typeof Theme)[keyof typeof Theme]) ||
    Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: (typeof Theme)[keyof typeof Theme];
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<(typeof Theme)[keyof typeof Theme]>(
        initialTheme || defaultTheme
    );

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
