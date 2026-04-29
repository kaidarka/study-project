import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemsType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ISidebarItemProps {
    item: SidebarItemsType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <AppLink
                    to={item.path}
                    variant="primary"
                    className={classNames(cls.SidebarItemRedesigned, {
                        [cls.collapsedRedesigned]: collapsed,
                    })}
                    activeClassName={cls.active}
                >
                    {item?.Icon && <Icon Svg={item.Icon} width={32} height={32} />}
                    <span className={cls.linkRedesigned}>{t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    to={item.path}
                    theme={AppLinkTheme.PRIMARY}
                    className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed })}
                >
                    {item?.Icon && <item.Icon className={cls.icon} />}
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
        />
    );
});
