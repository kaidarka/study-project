import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { SidebarItemsType } from '../../model/items';

interface ISidebarItemProps {
    item: SidebarItemsType
    collapsed: boolean
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.PRIMARY}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed })}
        >
            {item?.Icon && (<item.Icon className={cls.icon} />)}
            <span
                className={cls.link}
            >
                {t(item.text)}
            </span>
        </AppLink>
    );
});
