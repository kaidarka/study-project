import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList, ArticlesViews } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: IArticlesPageProps) => {
    const { className } = props;
    return (
        <div
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <ArticleList
                view={ArticlesViews.LIST}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
