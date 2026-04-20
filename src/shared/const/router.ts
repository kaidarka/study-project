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

export const RoutePath = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // +id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILED]: '/articles/', // +id
    [AppRoutes.ARTICLE_CREATE]: '/articles/create',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    // LAST
    [AppRoutes.NOT_FOUND]: '*',
} as const satisfies Record<typeof AppRoutes[keyof typeof AppRoutes], string>;
