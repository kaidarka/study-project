import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
import { IArticleCodeBlock } from '../../model/types/article';

interface IArticleImageCodeComponentProps {
    className?: string;
    block: IArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: IArticleImageCodeComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageCodeComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
