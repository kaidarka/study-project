import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { IBuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: IBuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    
    // Убеждаемся, что node_modules разрешается правильно
    if (!config.resolve!.modules) {
        config.resolve!.modules = ['node_modules'];
    }
    if (Array.isArray(config.resolve!.modules)) {
        config.resolve!.modules.push('node_modules');
    }

    // @ts-ignore
    config.module!.rules = config.module!.rules!.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules?.push(buildCssLoader(true));
    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));
    return config;
};
