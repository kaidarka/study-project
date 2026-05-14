import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortSelector } from '@/features/Articles/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/Articles/ArticleTypeTabs';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesPageFilters.module.scss';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

export const ArticlesPageFilters = memo(() => {
    const { t } = useTranslation();

    const { sort, order, search, type, onChangeSort, onChangeOrder, onChangeType, onChangeSearch } =
        useArticlesFilters();

    return (
        <VStack gap="md" max>
            <HStack justifyContent="between" gap="md" max>
                <ArticleSortSelector
                    sort={sort}
                    onChangeSort={onChangeSort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                />
                <ViewSelectorContainer />
            </HStack>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} onChange={onChangeSearch} value={search} />
            </Card>
            <ArticleTypeTabs value={type} onTabClick={onChangeType} />
        </VStack>
    );
});
