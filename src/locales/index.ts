import type { Language } from 'element-plus/es/locale'
// element plus 国际化
import enLocale from 'element-plus/es/locale/lang/en'
import defaultLocale from 'element-plus/es/locale/lang/zh-cn'
import { i18n, loadLocaleMessages, loadLocalesMapFromDir } from './i18n'
import type { LocaleSetupOptions, SupportedLanguagesType } from './typing'
import type { App } from 'vue'

import { currentLocale, setupI18n as coreSetup } from './i18n'

const modules = import.meta.glob('./langs/**/*.json')
const localesMap = loadLocalesMapFromDir(/\.\/langs\/([^/]+)\/(.*)\.json$/, modules)

/**
 * 加载应用特有的语言包
 * 这里也可以改造为从服务端获取翻译数据
 * @param lang
 */
async function loadMessages(lang: SupportedLanguagesType) {
  const [appLocaleMessages] = await Promise.all([localesMap[lang]?.(), loadThirdPartyMessage(lang)])
  return appLocaleMessages?.default
}

/**
 * 加载第三方组件库的语言包
 * @param lang
 */
async function loadThirdPartyMessage(lang: SupportedLanguagesType) {
  await Promise.all([loadElementLocale(lang)])
}

const elementLocale = ref<Language>(defaultLocale)
/**
 * 加载element-plus的语言包
 * @param lang
 */
async function loadElementLocale(lang: SupportedLanguagesType) {
  switch (lang) {
    case 'en-US': {
      elementLocale.value = enLocale
      break
    }
    case 'zh-CN': {
      elementLocale.value = defaultLocale
      break
    }
  }
}

async function setupI18n(app: App, options: LocaleSetupOptions = {}) {
  await coreSetup(app, {
    defaultLocale: 'zh-CN',
    loadMessages,
    missingWarn: !import.meta.env.PROD,
    ...options,
  })
}

const $t: typeof i18n.global.t = i18n.global.t

const changeLanguage = () => {
  currentLocale.value = currentLocale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  loadLocaleMessages(currentLocale.value)
}

export { $t, currentLocale, elementLocale, setupI18n, changeLanguage }
