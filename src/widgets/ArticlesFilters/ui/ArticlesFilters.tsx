import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/Articles/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/Articles/ArticleTypeTabs';
import { SortOrder } from '@/shared/types';
import { Input } from '@/shared/ui/deprecated/Input';
import { TabItem } from '@/shared/ui/deprecated/Tab';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesFilters.module.scss';

type ArticlesFiltersProps = {
    onChangeSearch: (search: string) => void;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
    onChangeType: (type: TabItem['value']) => void;
    search: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
};

export const ArticlesFilters = (props: ArticlesFiltersProps) => {
    const { onChangeOrder, onChangeSearch, onChangeSort, onChangeType, order, search, sort, type } =
        props;
    const { t } = useTranslation();

    return (
        <Card padding="lg" className={cls.ArticlesFilters}>
            <VStack gap="md" max>
                <Input placeholder={t('Поиск')} onChange={onChangeSearch} value={search} />
                <ArticleTypeTabs value={type} onTabClick={onChangeType} />
                <ArticleSortSelector
                    sort={sort}
                    onChangeSort={onChangeSort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                />
            </VStack>
        </Card>
    );
};
