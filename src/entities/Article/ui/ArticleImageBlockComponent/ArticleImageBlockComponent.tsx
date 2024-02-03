import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { IArticleImageBlock } from '../../model/types/article';

interface IArticleImageBlockComponentProps {
    className?: string;
    block: IArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: IArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div
            className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
        >
            <img src={block.src} alt={block.title} className={cls.image} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
