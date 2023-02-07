import type { Context } from '@nuxt/types'

export default function ({ app, $vuetify, $dayjs, $axios }: Context) {
  $vuetify.lang.current = app.i18n.locale
  const lang = app.i18n.locale
  $dayjs.locale(lang)
  app.i18n.onLanguageSwitched = (_, locale) => {
    $dayjs.locale(locale)
    $vuetify.lang.current = locale || 'km'
    $axios.setHeader('Accept-Language', app.i18n.locale || 'km')
  }
}
