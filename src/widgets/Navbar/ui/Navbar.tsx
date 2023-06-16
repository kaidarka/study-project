import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface INavbarProps {
    className?: string;
}

export const Navbar = (props: INavbarProps) => {
    const {className} = props;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to='/' className={cls.mainLink} theme={AppLinkTheme.PRIMARY}>
                    Main
                </AppLink>
                <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>
                    About
                </AppLink>
            </div>
        </div>
    );
};
