module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
    settings: {
        react: {version: '18.2'},
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
    plugins: [
        'react-refresh',
        '@typescript-eslint',
        'import',
        'simple-import-sort',
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'quotes': ['error', 'single', {avoidEscape: true}],
        'semi': ['error', 'always'],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/no-duplicates': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'react/jsx-max-props-per-line': ['error', {maximum: 1}],
    },
};