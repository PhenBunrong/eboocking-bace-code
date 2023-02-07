import * as config from './config'

export default {
    css: ['~/assets/scss/app.scss'],
    ssr: false,
    target: 'static',
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
                dirs: ['./composables/**', './dto/**', './domain/common'],
            },
        ],
        '@vueuse/nuxt'
    ],

    modules: [
        '@nuxtjs/i18n',
        'vue-axios-http/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/dayjs',
        '@nuxtjs/universal-storage',
    ],

    ...config,
    // axios: {
    //     // proxy: true
    //     baseURL: "http://127.0.0.1:8000"
    // },

    build: {}
}