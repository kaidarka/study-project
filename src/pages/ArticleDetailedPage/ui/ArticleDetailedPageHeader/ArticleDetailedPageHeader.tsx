import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getArticleDetailedData } from '@/entities/Article';
import cls from './ArticleDetailedPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailedPageHeaderProps {
    className?: string;
}

export const ArticleDetailedPageHeader = memo((props: ArticleDetailedPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailedData);

    const onClickBack = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onClickEdit = () => {
        navigate(getRouteArticleEdit(article?.id || ''));
    };

    return (
        <div className={classNames(cls.ArticleDetailedPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onClickBack}>
                {t('Назад к списку')}
            </Button>
            {canEdit ? (
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onClickEdit}>
                    {t('Редактировать')}
                </Button>
            ) : null}
        </div>
    );
});
