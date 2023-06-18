import { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types/config';

export function buildResolvers(options: IBuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
