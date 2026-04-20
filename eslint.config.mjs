import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import i18next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';
import pathChecker from 'eslint-plugin-path-checker-kaidarka';
import unusedImports from "eslint-plugin-unused-imports";
import globals from 'globals';

export default [
    {
        ignores: ['node_modules/**', 'dist/**', 'build/**'],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                ...globals.jest,
                __IS_DEV__: 'readonly',
                __API__: 'readonly',
                __PROJECT__: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            i18next,
            'react-hooks': reactHooks,
            'path-checker-kaidarka': pathChecker,
            "unused-imports": unusedImports,
        },
        rules: {
            indent: [2, 4, { SwitchCase: 1 }],
            'no-console': 'warn',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            'max-len': [
                'error',
                {
                    ignoreComments: true,
                    code: 100,
                },
            ],
            'i18next/no-literal-string': [
                'warn',
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid', 'to'],
                },
            ],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            'no-param-reassign': 'off',
            'no-undef': 'off',
            'no-shadow': 'off',
            'no-underscore-dangle': 'off',
            'path-checker-kaidarka/path-checker': ['error', {alias: '@'}],
            'path-checker-kaidarka/public-api-imports': [
                'error',
                {
                    alias: '@',
                    testFilesPatterns: ['**/*.stories.tsx', '**/*.test.tsx', '**/StoreDecorator.tsx'],
                }
            ],
            'path-checker-kaidarka/layer-imports': [
                'error',
                {
                    alias: '@',
                    ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
                }
            ],
            "unused-imports/no-unused-imports": "error",
        },
    },
    {
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    },
];
