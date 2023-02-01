import * as config from './config'

export default {
    css: [],
    plugins: [],
    components: true,
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify',
        '@nuxtjs/composition-api/module', [
            'unplugin-auto-import/nuxt',
            {
                imports: [
                    '@nuxtjs/composition-api',
                    {
                        '@vueuse/core': ['useVModel', 'useDebounceFn'],
                        'vue-axios-http': ['sleep'],
                    },
                ],
            },
        ],
        '@vueuse/nuxt'
    ],

    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/universal-storage',
    ],

    ...config,

    build: {}
}