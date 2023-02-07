import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
  safelist: ['invisible'],
  attributify: false,
  corePlugins: { container: false },
})
