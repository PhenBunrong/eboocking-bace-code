import type { Data, SetupContext } from '@nuxtjs/composition-api'
import type Vue from 'vue'
import { every, map, isFunction } from 'lodash'

export function useCommonInput(props: Readonly<Data>, ctx: SetupContext<{}>) {
  const { selectText, validations } = toRefs(props)
  const valueModel = useVModel(props, 'value', ctx.emit, { eventName: 'input' })
  const onFocus = (evt: any) => {
    if (selectText && selectText.value) {
      const target = evt.target as HTMLInputElement
      const elmLen = target.value.length
      setTimeout(() => {
        target.setSelectionRange(0, elmLen)
      })
    }
    ctx.emit('focus', evt)
  }
  const onBlur = (evt: any) => ctx.emit('blur', evt)
  const onKeydown = (evt: any) => ctx.emit('keydown', evt)
  const onPaste = (evt: any) => ctx.emit('paste', evt)
  const onChange = (evt: any) => ctx.emit('change', evt)
  const rules = computed(() => {
    const rules: any[] = [(val: string) => !!val && val.length > 0]
    rules.concat(validations.value)
    return rules
  })
  const isValid = computed(() => {
    const stringValue =
      typeof valueModel.value === 'number' ? Number(valueModel.value.toFixed(6)).toString() : valueModel.value
    return every(map(rules.value, (valid) => (isFunction(valid) ? valid(stringValue) : valid)))
  })
  const input = ref<Vue & { validate: () => boolean }>()
  const validate = () => {
    setTimeout(() => {
      input.value?.validate()
    }, 50)
  }

  return {
    valueModel,
    rules,
    onFocus,
    onBlur,
    onKeydown,
    onPaste,
    onChange,
    isValid,
    input,
    validate,
  }
}
