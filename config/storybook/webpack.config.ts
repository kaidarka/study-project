import webpack from 'webpack';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Определяет пути для Storybook
 */
function getStorybookPaths() {
    const projectRoot = path.resolve(__dirname, '..', '..');
    return {
        src: path.resolve(projectRoot, 'src'),
    };
}

/**
 * Настраивает resolve для абсолютных импортов
 */
function configureResolvers(config: webpack.Configuration, srcPath: string): void {
    if (!config.resolve) {
        config.resolve = {};
    }

    config.resolve.preferAbsolute = true;
    config.resolve.modules = [srcPath, 'node_modules'];
    config.resolve.mainFiles = ['index'];

    // Добавляем расширения для TypeScript, если их ещё нет
    if (!config.resolve.extensions) {
        config.resolve.extensions = [];
    }
    const extensions = ['.ts', '.tsx'];
    extensions.forEach((ext) => {
        if (!config.resolve!.extensions!.includes(ext)) {
            config.resolve!.extensions!.push(ext);
        }
    });
}

/**
 * Настраивает правила для модулей
 */
function configureModuleRules(config: webpack.Configuration): void {
    if (!config.module?.rules) {
        return;
    }

    // Модифицируем существующие правила Storybook
    config.module.rules = config.module.rules.map((rule) => {
        // Пропускаем правила, которые не являются объектами
        if (!rule || typeof rule !== 'object' || Array.isArray(rule) || !('test' in rule)) {
            return rule;
        }

        const ruleObj = rule as webpack.RuleSetRule;
        const { test } = ruleObj;

        // Пропускаем правила без test
        if (!test) {
            return rule;
        }

        const testString = test instanceof RegExp ? test.source : String(test);

        // Исключаем SVG из стандартной обработки
        if (/svg/.test(testString)) {
            return { ...ruleObj, exclude: /\.svg$/i };
        }

        // Исключаем TypeScript из стандартной обработки JS
        if (/\.(mjs|jsx?)$/.test(testString)) {
            return { ...ruleObj, exclude: /\.(ts|tsx)$/ };
        }

        return rule;
    });

    // Добавляем кастомные правила
    const customRules: webpack.RuleSetRule[] = [
        // Babel loader для TypeScript
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript',
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic',
                            },
                        ],
                    ],
                },
            },
        },
        // SVG loader
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        // CSS/SCSS loader
        buildCssLoader(true),
    ];

    config.module.rules.push(...customRules);
}

/**
 * Настраивает плагины
 */
function configurePlugins(config: webpack.Configuration): void {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );
}

/**
 * Главная функция конфигурации webpack для Storybook
 */
export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths = getStorybookPaths();

    configureResolvers(config, paths.src);
    configureModuleRules(config);
    configurePlugins(config);

    return config;
};
