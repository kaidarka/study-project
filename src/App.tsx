import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage/loader";
import AboutPage from "./pages/AboutPage/loader";
import './index.scss';

export const App = () => {
    return (
        <div className="app">
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
