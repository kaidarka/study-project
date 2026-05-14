import { memo } from 'react';
import { ArticleViewSelector } from '@/features/Articles/ArticleViewSelector';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

export const ViewSelectorContainer = memo(() => {
    const { view, onChangeView } = useArticlesFilters();

    return <ArticleViewSelector view={view} onViewClick={onChangeView} />;
});
