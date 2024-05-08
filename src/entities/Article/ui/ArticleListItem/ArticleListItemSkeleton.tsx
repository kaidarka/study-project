import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticlesViews } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface IArticleListItemSkeletonProps {
    view: ArticlesViews;
}

export const ArticleListItemSkeleton = memo((props: IArticleListItemSkeletonProps) => {
    const { view } = props;

    switch (view) {
        case ArticlesViews.LIST: {
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [cls[view]])}
                >
                    <Card>
                        <div className={cls.header}>
                            <Skeleton height={30} width={30} border="50%" />
                            <Skeleton width={150} height={24} className={cls.username} />
                            <Skeleton width={150} height={24} className={cls.date} />
                        </div>
                        <Skeleton width={250} height={32} className={cls.title} />
                        <Skeleton width="100%" height={200} className={cls.img} />
                        <div className={cls.footer}>
                            <Skeleton width={200} height={36} />
                        </div>
                    </Card>
                </div>
            );
        }
        case ArticlesViews.GRID:
        default:
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [cls[view]])}
                >
                    <Card>
                        <div className={cls.imageWrapper}>
                            <Skeleton width="100%" height={200} className={cls.img} />
                        </div>
                        <div className={cls.infoWrapper}>
                            <Skeleton width={130} height={24} className={cls.types} />
                        </div>
                        <Skeleton width={150} height={24} className={cls.title} />
                    </Card>
                </div>
            );
    }
});
