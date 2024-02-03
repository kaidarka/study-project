export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface IArticleBlockBase {
    id: string;
    type: ArticleBlockType,
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type TArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface IArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number,
    createdAt: string;
    blocks: TArticleBlock[]
    type: ArticleType[],
}
