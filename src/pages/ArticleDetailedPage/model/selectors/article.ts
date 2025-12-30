import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailedData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getCanEditArticle = createSelector(
    getArticleDetailedData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article?.user?.id === user?.id;
    },
);
