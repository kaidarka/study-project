import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetailed } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailedPage.module.scss';

interface IArticlesDetailedPageProps {
    className?: string;
}

const ArticleDetailedPage = (props: IArticlesDetailedPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string; }>();

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticlesDetailedPage, {}, [className])}
            >
                {t('Такой статьи не существует')}
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticlesDetailedPage, {}, [className])}
        >
            <ArticleDetailed id={id} />
        </div>
    );
};

export default memo(ArticleDetailedPage);
