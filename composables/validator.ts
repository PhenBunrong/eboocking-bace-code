import type { ValidatorOptions } from '@chantouchsek/validatorjs'
import type { ValidatorEntity } from '~/domain/entity'
import Validator from '@chantouchsek/validatorjs'
import { defu } from 'defu'
import { get } from 'lodash'

Validator.register('telephone', (value: string) => value.match(/^\d{3}-\d{3}-\d{4}$/))

export function useValidator() {
  const { $errors } = useContext()
  const { locale } = useI18n()

  const validateOnInput = (payload: ValidatorEntity) => {
    const { input, rules } = payload || {}
    const customMessages = get(payload, 'messages', {})
    const customAttributes = get(payload, 'attributes', {})
    try {
      const lang = require(`~/locales/${locale.value}`)
      const attributes = get(lang.default, 'attributes', {})
      const messages = get(lang.default, 'messages', {})
      const options: ValidatorOptions = {
        locale: locale.value,
        confirmedReverse: true,
        customMessages: defu(customMessages, messages),
        customAttributes: defu(customAttributes, attributes),
      }
      const validator = new Validator(input, rules, options)
      if (validator.fails()) {
        $errors.fill(validator.errors.all())
        return false
      }
      $errors.flush()
      return true
    } catch (e) {
      console.error(e)
      $errors.flush()
    }
  }
  const checkValidate = (payload: ValidatorEntity) => {
    const rules = get(payload, 'rules', {})
    const input = get(payload, 'input', {})
    return validateOnInput({ input, rules })
  }

  return { checkValidate, validateOnInput }
}
