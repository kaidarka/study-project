import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = (props: INavbarProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
