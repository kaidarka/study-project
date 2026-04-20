import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import GridIcon from '@/shared/assets/icons/grid-icon.svg?react';
import ListIcon from '@/shared/assets/icons/list-icon.svg?react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticlesViews } from '@/entities/Article';

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
        <div
            className={classNames(cls.ArticleViewSelector, {}, [className])}
        >
            {viewTypes.map((type) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(type.view)}
                    key={type.view}
                >
                    <Icon
                        Svg={type.icon}
                        className={classNames('', { [cls.notSelected]: view !== type.view })}
                    />
                </Button>
            ))}
        </div>
    );
});
