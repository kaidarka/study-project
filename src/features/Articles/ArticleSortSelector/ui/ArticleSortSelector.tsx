import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/deprecated/Select';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (order: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;
    const { t } = useTranslation();

    const orderOptions = [
        {
            label: t('возрастанию'),
            content: t('возрастанию'),
            value: 'asc' as const,
        },
        {
            label: t('убыванию'),
            content: t('убыванию'),
            value: 'desc' as const,
        },
    ];

    const sortFieldOptions = [
        {
            label: t('дате создания'),
            content: t('дате создания'),
            value: ArticleSortField.CREATED,
        },
        {
            label: t('названию'),
            content: t('названию'),
            value: ArticleSortField.TITLE,
        },
        {
            label: t('просмотрам'),
            content: t('просмотрам'),
            value: ArticleSortField.VIEWS,
        },
    ];

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
                    <VStack gap="sm">
                        <Text text={t('Сортировать по:')} />
                        <ListBox
                            value={sort}
                            items={sortFieldOptions}
                            onChange={onChangeSort}
                            anchor="bottom"
                        />
                        <ListBox
                            value={order}
                            items={orderOptions}
                            onChange={onChangeOrder}
                            anchor="bottom"
                        />
                    </VStack>
                </div>
            }
            off={
                <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
                    <Select
                        value={sort}
                        options={sortFieldOptions}
                        label={t('Сортировать по')}
                        onChange={onChangeSort}
                    />
                    <Select
                        value={order}
                        options={orderOptions}
                        label={t('по')}
                        onChange={onChangeOrder}
                    />
                </div>
            }
        />
    );
});
