import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (order: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
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
            <Select<ArticleSortField>
                value={sort}
                options={sortFieldOptions}
                label={t('Сортировать по')}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                value={order}
                options={orderOptions}
                label={t('по')}
                onChange={onChangeOrder}
            />
        </div>
    );
});
