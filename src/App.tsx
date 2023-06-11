import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from "./theme/useTheme";
import MainPage from "./pages/MainPage/loader";
import AboutPage from "./pages/AboutPage/loader";
import './styles/index.scss';
import {classNames} from "./helpers/classNames/classNames";



export const App = () => {
    const {theme, themeToggle} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={themeToggle}>Toggle Theme</button>
            <br/>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
