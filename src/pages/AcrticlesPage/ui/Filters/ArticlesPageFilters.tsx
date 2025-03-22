import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticlesViews, ArticleViewSelector } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Select } from 'shared/ui/Select/Select';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { getArticlesPageView } from '../../model/selectors/articlesPageSelector';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface IArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: IArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticlesViews) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    return (
        <div
            className={classNames(cls.ArticlesPageFilters, {}, [className])}
        >
            <div className={cls.sortWrapper}>
                <ArticleSortSelector />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} />
            </Card>
        </div>
    );
});
