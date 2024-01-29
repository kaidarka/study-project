import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: IArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        <div
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            {t('ArticlesPage')}
        </div>
    );
};

export default memo(ArticlesPage);
