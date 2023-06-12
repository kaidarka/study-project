import React from 'react';
import {Link} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import './styles/index.scss';



export const App = () => {
    const {theme, themeToggle} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={themeToggle}>Toggle Theme</button>
            <br/>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <AppRouter/>
        </div>
    );
};
