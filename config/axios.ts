import type { AxiosOptions } from '@nuxtjs/axios'

export const axios: AxiosOptions = {
  retry: true,
  credentials: true,
  proxy: process.env.PROXY === 'true',
  debug: process.env.NODE_ENV !== 'production',
}
