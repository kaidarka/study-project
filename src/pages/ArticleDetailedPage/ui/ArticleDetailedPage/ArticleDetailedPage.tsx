import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { ArticleRating } from '@/features/Articles/articleRating';
import { ArticleDetailed } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Counter } from '@/entities/Counter';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { toggleFeatures } from '@/shared/lib/features';
import cls from './ArticleDetailedPage.module.scss';
import { articleDetailedPageReducer } from '../../model/slices';
import { ArticleDetailedPageHeader } from '../ArticleDetailedPageHeader/ArticleDetailedPageHeader';
import { ArticleDetailedComments } from '../ArticleDeatiledComments/ArticleDetailedComments';

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

    const counter = toggleFeatures({
        name: 'isArticleCounterEnabled',
        on: () => <Counter />,
        off: () => <div>Counter is disabled</div>,
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailedPage, {}, [className])}>
                <ArticleDetailedPageHeader />
                <ArticleDetailed id={id} />
                <ArticleRating articleId={id} />
                {counter}
                <ArticleDetailedComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
