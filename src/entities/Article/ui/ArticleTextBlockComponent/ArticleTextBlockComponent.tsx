import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { IArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface IArticleImageTextComponentProps {
    className?: string;
    block: IArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: IArticleImageTextComponentProps) => {
    const { className, block } = props;
    return (
        <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
        >
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs
                && block.paragraphs.map((paragraph) => (
                    <Text text={paragraph} key={paragraph} className={cls.paragraph} />
                ))}
        </div>
    );
});
