import { Theme } from '@/shared/const/theme';

export type JsonSettings = {
    theme?: (typeof Theme)[keyof typeof Theme];
    isFirstVisit?: boolean;
    isArticlePageOpened?: boolean;
};
