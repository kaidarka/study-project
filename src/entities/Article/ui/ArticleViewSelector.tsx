import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import GridIcon from 'shared/assets/icons/grid-icon.svg';
import ListIcon from 'shared/assets/icons/list-icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticlesViews } from '../model/types/article';

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
