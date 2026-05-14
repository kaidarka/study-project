import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import GridIcon from '@/shared/assets/icons/grid-icon.svg';
import ListIcon from '@/shared/assets/icons/list-icon.svg';
import cls from './ArticleViewSelector.module.scss';
import { ArticlesViews } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface IArticleViewSelectorProps {
    className?: string;
    view: ArticlesViews;
    onViewClick?: (view: ArticlesViews) => void;
}

const viewTypes = [
    {
        view: ArticlesViews.GRID,
        icon: GridIcon,
    },
    {
        view: ArticlesViews.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;

    const onClick = (newView: ArticlesViews) => () => {
        onViewClick?.(newView);
    };

    return (
        <Card className={classNames(cls.ArticleViewSelector, {}, [className])} border="round">
            <HStack gap={'md'}>
                {viewTypes.map(({ view: typeView, icon: Icon }) => (
                    <Icon
                        onClick={onClick(typeView)}
                        className={classNames('', { [cls.notSelected]: view !== typeView })}
                    />
                ))}
            </HStack>
        </Card>
    );
});
