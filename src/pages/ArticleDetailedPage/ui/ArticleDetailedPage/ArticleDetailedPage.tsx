import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetailed } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecomendationsList } from '@/features/Articles/articleRecomendationsList';
import cls from './ArticleDetailedPage.module.scss';
import { articleDetailedPageReducer } from '../../model/slices';
import { ArticleDetailedPageHeader } from '../ArticleDetailedPageHeader/ArticleDetailedPageHeader';
import { ArticleDetailedComments } from '../ArticleDeatiledComments/ArticleDetailedComments';
import { ArticleRating } from '@/features/Articles/articleRating';

interface IArticleDetailedPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailedPage: articleDetailedPageReducer,
};

const ArticleDetailedPage = (props: IArticleDetailedPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailedPage, {}, [className])}>
                {t('Такой статьи не существует')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailedPage, {}, [className])}>
                <ArticleDetailedPageHeader />
                <ArticleDetailed id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecomendationsList />
                <ArticleDetailedComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
