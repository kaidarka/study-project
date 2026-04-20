import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from '@/shared/ui/Select';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '../../model/types/article';

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
