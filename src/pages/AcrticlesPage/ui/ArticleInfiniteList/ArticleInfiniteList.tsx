import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlePageSlice';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';

export const ArticleInfiniteList = () => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
};
