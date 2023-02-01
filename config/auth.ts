import type { ModuleOptions } from '@nuxtjs/auth-next'

export const auth: Partial<ModuleOptions> = {
  redirect: {
    login: '/login',
    logout: '/login',
    callback: '/login',
    home: '/bookings',
  },
  strategies: {
    local: {
      name: 'local',
      enabled: true,
      scheme: 'local',
      token: {
        property: 'accessToken',
        global: true,
        required: true,
        maxAge: 60 * 60 * 24 * 180,
      },
      user: {
        property: 'data',
        autoFetch: true,
      },
      endpoints: {
        login: { url: 'auth/login', method: 'post' },
        logout: { url: 'auth/logout', method: 'post' },
        user: { url: 'auth/me', method: 'get' },
      },
    },
  },
  plugins: [
    { src: '~/plugins/axios', ssr: true },
    { src: '~/plugins/auth', ssr: true },
    { src: '~/plugins/vue-gates', ssr: true },
  ],
}
