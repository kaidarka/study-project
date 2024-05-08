import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticlesViews, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: ArticlesViews
}

export const ArticleList = memo((props: IArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticlesViews.GRID,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            >
                {
                    new Array(view === ArticlesViews.GRID ? 9 : 3).fill(0).map((item, index) => (

                        <ArticleListItemSkeleton view={view} key={index} />
                    ))
                }
            </div>
        );
    }

    const renderArticle = (article: IArticle) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    );

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
