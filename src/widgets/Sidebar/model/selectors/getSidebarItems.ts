import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIconDeprecated from '@/shared/assets/icons/home-deprecated.svg?react';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg?react';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg?react';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg?react';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/announcement.svg';
import ProfileIcon from '@/shared/assets/icons/person_outline.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { SidebarItemsType } from '../types/sidebar';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemsType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => HomeIcon,
                off: () => HomeIconDeprecated,
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
            text: 'О сайте',
        },
    ];
    if (userData?.id) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticlesIcon,
                    off: () => ArticlesIconDeprecated,
                }),
                text: 'Статьи',
                authOnly: true,
            }
        );
    }

    return sidebarItemsList;
});
