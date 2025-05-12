import { ref } from 'vue'

import { createSharedComposable } from '@vueuse/core'
import type { Locale } from './typing'

export const useSimpleLocale = createSharedComposable(() => {
  const currentLocale = ref<Locale>('zh-CN')

  const setSimpleLocale = (locale: Locale) => {
    currentLocale.value = locale
  }

  return {
    currentLocale,
    setSimpleLocale,
  }
})
