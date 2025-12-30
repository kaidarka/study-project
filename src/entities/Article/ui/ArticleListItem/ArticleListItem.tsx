import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    ArticleBlockType, ArticlesViews, Article, IArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticlesViews;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view = ArticlesViews.GRID, target,
    } = props;
    const { t } = useTranslation();

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
                            <AppLink to={RoutePath.articleDetailed + article.id} target={target}>
                                <Button theme={ButtonTheme.OUTLINE}>
                                    {t('Читать далее...')}
                                </Button>
                            </AppLink>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }
        case ArticlesViews.GRID:
        default:
            return (
                <AppLink
                    to={RoutePath.articleDetailed + article.id}
                    className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                    target={target}
                >
                    <Card>
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
                </AppLink>
            );
    }
});
