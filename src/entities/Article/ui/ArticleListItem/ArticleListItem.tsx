import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    ArticleBlockType, ArticlesViews, IArticle, IArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: ArticlesViews;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
    const { className, article, view = ArticlesViews.GRID } = props;
    const { t } = useTranslation();

    const navigate = useNavigate();

    const onClickArticleCard = useCallback(() => {
        navigate(RoutePath.articlesDetailed + article.id);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    switch (view) {
        case ArticlesViews.LIST: {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as IArticleTextBlock;
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                >
                    <Card>
                        <div className={cls.header}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text text={article.user.username} className={cls.username} />
                            <Text text={article.createdAt} className={cls.date} />
                        </div>
                        <Text text={article.title} className={cls.title} />
                        {types}
                        <img src={article.img} alt={article.title} className={cls.img} />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={cls.textBlock}
                            />
                        )}
                        <div className={cls.footer}>
                            <Button theme={ButtonTheme.OUTLINE} onClick={onClickArticleCard}>
                                {t('Читать далее...')}
                            </Button>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }
        case ArticlesViews.GRID:
        default:
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                >
                    <Card onClick={onClickArticleCard}>
                        <div className={cls.imageWrapper}>
                            <img src={article.img} alt={article.title} className={cls.img} />
                            <Text text={article.createdAt} className={cls.date} />
                        </div>
                        <div className={cls.infoWrapper}>
                            {types}
                            {views}
                        </div>
                        <Text text={article.title} className={cls.title} />
                    </Card>
                </div>
            );
    }
});
