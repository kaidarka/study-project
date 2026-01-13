import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticlesViews, Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticlesViews
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticlesViews.GRID,
        target,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} target={target} />
    );

    if (!isLoading && !articles?.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            >
                <Text text="Статьи не найдены" />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles?.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && new Array(
                view === ArticlesViews.GRID ? 9 : 3,
            ).fill(0).map((item, index) => (
                <ArticleListItemSkeleton view={view} key={index} />
            ))}
        </div>
    );
});
