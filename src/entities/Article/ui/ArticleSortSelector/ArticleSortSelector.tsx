import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface IArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (order: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            label: t('возрастанию'),
            value: 'asc',
        },
        {
            label: t('убыванию'),
            value: 'desc',
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            label: t('дате создания'),
            value: ArticleSortField.CREATED,
        },
        {
            label: t('названию'),
            value: ArticleSortField.TITLE,
        },
        {
            label: t('просмотрам'),
            value: ArticleSortField.VIEWS,
        },
    ], [t]);

    return (
        <div
            className={classNames(cls.ArticleSortSelector, {}, [className])}
        >
            <Select
                value={sort}
                options={sortFieldOptions}
                label={t('Сортировать по')}
            />
            <Select
                value={order}
                options={orderOptions}
                label={t('по')}
            />
        </div>
    );
});
