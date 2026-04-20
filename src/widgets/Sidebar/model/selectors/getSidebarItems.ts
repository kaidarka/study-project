import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIcon from '@/shared/assets/icons/home.svg?react';
import AboutIcon from '@/shared/assets/icons/about.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import ArticlesIcon from '@/shared/assets/icons/articles.svg?react';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile 
} from '@/shared/const/router';
import { SidebarItemsType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemsType[] = [
            {
                path: getRouteMain(),
                Icon: HomeIcon,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];
        if (userData?.id) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
