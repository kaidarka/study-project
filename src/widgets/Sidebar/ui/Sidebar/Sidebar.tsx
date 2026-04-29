import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteMain } from '@/shared/const/router';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SendIcon from '@/shared/assets/icons/send.svg';
import LogoOnlyIcon from '@/shared/assets/icons/kaidarka-logo-icon.svg?react';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export const Sidebar = memo((props: ISidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((state) => !state);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem item={item} key={item.path} collapsed={collapsed} />
            )),
        [collapsed, sidebarItemsList]
    );

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className]
                    )}
                >
                    <AppLink className={cls.appLogoLink} to={getRouteMain()}>
                        {collapsed ? (
                            <Icon
                                Svg={LogoOnlyIcon}
                                className={cls.appLogoCollapsed}
                                width={28}
                                height={28}
                            />
                        ) : (
                            <AppLogo className={cls.appLogo} size={100} />
                        )}
                    </AppLink>
                    <VStack gap="md" className={cls.redesignedItems} role="navigation">
                        {itemsList}
                    </VStack>
                    <Icon Svg={SendIcon} onClick={onToggle} className={cls.collapseBtnRedesigned} />
                    <div className={cls.switchersRedesigned}>
                        <ThemeSwitcher />
                        <LanguageSwitcher className={cls.lang} short={collapsed} />
                    </div>
                </aside>
            }
            off={
                <aside
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
                    <VStack gap="md" className={cls.items} role="navigation">
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LanguageSwitcher className={cls.lang} short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
});
