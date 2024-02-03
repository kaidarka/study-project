import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import {
    ArticleCodeBlockComponent,
} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleBlockType, TArticleBlock } from '../../model/types/article';
import { articleDetailedReducer } from '../../model/slice/articleDetailedSlice';
import { fetchArticleById } from '../../model/services/fetchAtricleById/fetchArticleById';
import cls from './ArticleDetailed.module.scss';
import {
    getArticleDetailedData,
    getArticleDetailedError,
    getArticleDetailedIsLoading,
} from '../../model/selectors/articleDetailed';

interface IArticleDetailedProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetailed: articleDetailedReducer,
};

export const ArticleDetailed = memo((props: IArticleDetailedProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailedData);
    const isLoading = useSelector(getArticleDetailedIsLoading);
    const error = useSelector(getArticleDetailedError);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    let content;

    const renderBlock = useCallback((block: TArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block} />;
        default:
            return null;
        }
    }, []);

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t('Произошла ошибка при загрузке статьи.')}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    className={cls.title}
                    size={TextSize.L}
                />
                <div className={cls.articleExtraInfo}>
                    <Icon
                        Svg={EyeIcon}
                    />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleExtraInfo}>
                    <Icon
                        Svg={CalendarIcon}
                    />
                    <Text text={article?.createdAt} />
                </div>
                <div className={cls.blocks}>
                    {article?.blocks.map(renderBlock)}
                </div>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cls.ArticleDetailed, {}, [className])}
            >
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
