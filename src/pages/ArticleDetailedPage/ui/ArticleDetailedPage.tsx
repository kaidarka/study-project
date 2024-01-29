import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailedPage.module.scss';

interface IArticlesDetailedPageProps {
    className?: string;
}

const ArticleDetailedPage = (props: IArticlesDetailedPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        <div
            className={classNames(cls.ArticlesDetailedPage, {}, [className])}
        >
            {t('ArticlesDetailedPage')}
        </div>
    );
};

export default memo(ArticleDetailedPage);
