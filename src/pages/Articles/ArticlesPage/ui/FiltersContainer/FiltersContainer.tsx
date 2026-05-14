import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

export const FiltersContainer = () => {
    const { sort, order, search, type, onChangeSort, onChangeOrder, onChangeType, onChangeSearch } =
        useArticlesFilters();
    return (
        <ArticlesFilters
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeType={onChangeType}
            search={search}
            sort={sort}
            order={order}
            type={type}
        />
    );
};
