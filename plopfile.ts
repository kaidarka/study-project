import { NodePlopAPI } from 'plop';

interface ComponentAnswers {
    name: string;
    layer: string;
    subPath: string;
}

function pascalCaseHelper(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function camelCaseHelper(text: string): string {
    if (!text) return '';
    return text.charAt(0).toLowerCase() + text.slice(1);
}

export default function plopConfig(plop: NodePlopAPI) {
    // Вспомогательные функции для преобразования имен
    plop.setHelper('pascalCase', pascalCaseHelper);
    plop.setHelper('camelCase', camelCaseHelper);

    // Генератор для компонента
    plop.setGenerator('component', {
        description: 'Создать React компонент с SCSS модулем',
        prompts: [
            {
                type: 'list',
                name: 'layer',
                message: 'Выберите слой FSD:',
                choices: [
                    { name: 'shared - переиспользуемые компоненты', value: 'shared' },
                    { name: 'entities - бизнес-сущности', value: 'entities' },
                    { name: 'features - функциональности', value: 'features' },
                    { name: 'widgets - композитные блоки', value: 'widgets' },
                    { name: 'pages - страницы', value: 'pages' },
                ],
            },
            {
                type: 'input',
                name: 'subPath',
                message: 'Путь внутри слоя (например, ui или ArticleDetailedPage/ui):',
                default: 'ui',
                validate: (value: string): string | true => {
                    if (!value) return 'Путь обязателен';
                    if (value.startsWith('/')) {
                        return 'Путь не должен начинаться с /';
                    }
                    if (value.endsWith('/')) {
                        return 'Путь не должен заканчиваться на /';
                    }
                    return true;
                },
            },
            {
                type: 'input',
                name: 'name',
                message: 'Название компонента (например, MyComponent):',
                validate: (value: string): string | true => {
                    if (!value) return 'Название обязательно';
                    if (!/^[A-Z]/.test(value)) {
                        return 'Должно начинаться с заглавной буквы';
                    }
                    return true;
                },
            },
        ],
        actions: (data) => {
            const answers = data as ComponentAnswers;
            const componentName = answers.name;
            // Убираем название компонента из пути, если оно там есть
            let subPath = answers.subPath.trim();
            if (subPath.endsWith(componentName)) {
                subPath = subPath.slice(0, -componentName.length).replace(/\/$/, '');
            }
            // Формируем полный путь: src/{layer}/{subPath}/{componentName}
            const basePath = `src/${answers.layer}/${subPath}/${componentName}`;

            return [
                {
                    type: 'add',
                    path: `${basePath}/${componentName}.tsx`,
                    templateFile: 'plop-templates/component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: `${basePath}/${componentName}.module.scss`,
                    templateFile: 'plop-templates/component.module.scss.hbs',
                },
            ];
        },
    });

    // Генератор для страницы
    plop.setGenerator('new page', {
        description: 'Создать компоненты для новой страницы',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Название компонента (например, AnyPage):',
                validate: (value: string): string | true => {
                    if (!value) return 'Название обязательно';
                    if (!/^[A-Z]/.test(value)) {
                        return 'Должно начинаться с заглавной буквы';
                    }
                    return true;
                },
            },
        ],
        actions: (data) => {
            const answers = data as ComponentAnswers;
            const componentName = answers.name;

            const basePath = `src/pages/${componentName}`;

            return [
                {
                    type: 'add',
                    path: `${basePath}/ui/${componentName}.tsx`,
                    templateFile: 'plop-templates/newPage/component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: `${basePath}/ui/${componentName}.module.scss`,
                    templateFile: 'plop-templates/newPage/component.module.scss.hbs',
                },
                {
                    type: 'add',
                    path: `${basePath}/ui/${componentName}.async.tsx`,
                    templateFile: 'plop-templates/newPage/async.tsx.hbs',
                },
                {
                    type: 'add',
                    path: `${basePath}/index.ts`,
                    templateFile: 'plop-templates/newPage/index.ts.hbs',
                },
            ];
        },
    });
}
