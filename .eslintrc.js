module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    reportUnusedDisableDirectives: true,
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:vue/recommended',
    ],
    plugins: [],
    rules: {
        'import/named': 'off',
        'import/first': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/define-macros-order': [
            'error',
            {
                order: ['defineProps', 'defineEmits'],
            },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-indent': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/order': [
            'error',
            {
                groups: ['type', 'builtin', 'external', 'internal', 'index', 'sibling', 'parent', 'object'],
                alphabetize: { order: 'asc' },
            },
        ],
    },
    globals: {
        $nuxt: true,
    },
}