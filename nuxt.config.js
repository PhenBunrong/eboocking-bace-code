import * as config from './config'

export default {
    css: ['~/assets/scss/app.scss'],
    plugins: [],
    components: true,
    buildModules: [
        'nuxt-windicss',
        '@nuxtjs/vuetify',
        '@nuxtjs/eslint-module',
        '@nuxt/typescript-build',
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
    // axios: {
    //     // proxy: true
    //     baseURL: "http://127.0.0.1:8000"
    // },

    build: {}
}