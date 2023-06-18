import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = (props: ISidebarProps) => {
    const {className} = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(state => !state);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
