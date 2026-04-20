export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    PROFILE: 'profile',
    ARTICLES: 'articles',
    ARTICLE_DETAILED:'articleDetailed',
    ARTICLE_CREATE: 'articleCreate',
    ARTICLE_EDIT: 'articleEdit',
    ADMIN_PANEL: 'adminPanel',
    FORBIDDEN: 'forbidden',
    // LAST
    NOT_FOUND: 'not_found',
} as const

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetailed = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/create';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
