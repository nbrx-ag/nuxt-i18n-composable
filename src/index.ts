import {
  useContext,
  getCurrentInstance,
  computed
} from '@nuxtjs/composition-api'
import Vue, { VueConstructor } from 'vue'

/**
 * @see [vue-18n-composable](https://github.com/intlify/vue-i18n-composable/blob/master/src/index.ts)
 */
export function useI18n () {
  const { app } = useContext()

  const i18nInstance = app.i18n

  if (!i18nInstance) { throw new Error('nuxt-i18n not initialized') }

  const i18n = i18nInstance

  const instance = getCurrentInstance()
  const vm =
    instance?.proxy ||
    (instance as unknown as InstanceType<VueConstructor>) ||
    new Vue({})

  const locale = computed({
    get () {
      return i18n.locale
    },
    set (v: string) {
      i18n.locale = v
    }
  })

  return {
    locale,
    t: vm.$t.bind(vm),
    tc: vm.$tc.bind(vm),
    d: vm.$d.bind(vm),
    te: vm.$te.bind(vm),
    n: vm.$n.bind(vm)
  }
}
