import { ArticleDetailedCommentsSchema } from './ArticleDetailedCommentsSchema';
import { ArticleDetailedRecommendationsSchema } from './ArticleDetailedRecommendationsSchema';

export interface ArticleDetailedPageSchema {
    comments: ArticleDetailedCommentsSchema;
    recommendations: ArticleDetailedRecommendationsSchema;
}
