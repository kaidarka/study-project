import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack';
import { useGetArticleRecomendationsListQuery } from '../api/articlesRecomendationsApi';

interface ArticleRecomendationsListProps {
    className?: string;
}

export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
    const { className } = props;

    const { t } = useTranslation('article');
    const { data: articles, isLoading } = useGetArticleRecomendationsListQuery(4);

    if (isLoading || !articles) {
        return null;
    }

    return (
        <VStack gap="sm" className={classNames('', {}, [className])}>
            <Text title={t('Рекомендуемые статьи')} />
            <ArticleList articles={articles} target="_blank" />
        </VStack>
    );
});
