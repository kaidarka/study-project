import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export const Sidebar = (props: ISidebarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((state) => !state);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} />
                    <span
                        className={cls.link}
                    >
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span
                        className={cls.link}
                    >
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
