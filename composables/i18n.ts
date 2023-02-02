import type { LangTypes } from '@chantouchsek/validatorjs'
import type { LocaleObject } from '@nuxtjs/i18n'
import type { IVueI18n } from 'vue-i18n'
import Vue from 'vue'

export function useI18n() {
  const { i18n } = useContext()
  if (!i18n) throw new Error('@nuxtjs/i18n not initialized')
  const instance = getCurrentInstance()
  const vm = instance?.proxy || new Vue({})
  const locale = computed({
    get: () => i18n.locale as LangTypes,
    set: async (locale) => {
      await i18n.setLocale(locale)
    },
  })
  const locales = computed(() => i18n.locales as LocaleObject[])

  return {
    locale,
    locales,
    $t: vm.$t.bind(vm) as IVueI18n['t'],
    $tc: vm.$tc.bind(vm) as IVueI18n['tc'],
    $d: vm.$d.bind(vm) as IVueI18n['d'],
    $te: vm.$te.bind(vm) as IVueI18n['te'],
    $n: vm.$n.bind(vm) as IVueI18n['n'],
  }
}
