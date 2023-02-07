import type { Context } from '@nuxt/types'
import type { AxiosError } from 'axios'
import { isEmpty, isString } from 'lodash'
import { getErrorMessage } from '~/utils/parser'

export default function (ctx: Context) {
  ctx.$axios.setHeader('Accept-Language', ctx.app.i18n.locale || 'en')
  ctx.$axios.onError((e: AxiosError) => {
    const { message, isNotify } = getErrorMessage(e, ctx)
    if (isNotify && isString(message) && !isEmpty(ctx.$dialog)) ctx.$dialog.notify.warning(message)
    return Promise.reject(e)
  })
}
