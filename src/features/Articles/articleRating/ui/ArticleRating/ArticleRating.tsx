import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

type ArticleRatingProps = {
    className?: string;
    articleId: string;
}

export const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId: userData?.id || '' });

    const [rateArticle] = useRateArticleMutation();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticle({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (error) {
            console.error(error);
        }
    }, [rateArticle, userData?.id, articleId]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }
    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={className}
            title="Оцените статью"
            feedbackTitle="Оставьте свой отзыв о статье"
            hasFeedback
            rate={rating?.rate}
        />
    );
};
