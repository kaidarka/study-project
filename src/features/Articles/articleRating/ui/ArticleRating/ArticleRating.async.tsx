import { lazy, Suspense } from 'react';
import type { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

const ArticleRatingAsync = lazy(() => import('./ArticleRating'));

export const ArticleRating = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ArticleRatingAsync {...props} />
    </Suspense>
);
