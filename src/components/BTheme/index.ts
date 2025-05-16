import { merge, kebabCase } from 'lodash'
import { themeList } from './preferences'
import { hexToRGB, mix, rgbToHex, setStyle } from './utils'
import { storageLocal } from '@/utils/storage'

const themeState = reactive(
  storageLocal.getItem('theme') || {
    // 当前主题资源
    theme: 'base',
    // 当前明暗模式
    mode: 'light',
  },
)

// 监听主题与色调更新
watch(
  () => themeState,
  (newValue) => {
    // 根据名字获取主题资源
    const newTheme = themeList.find((item) => item.name === newValue.theme)
    if (!newTheme) {
      return
    }
    // 设置新主题模式式样
    const cssContent = genThemeCssContent(newTheme, newValue.mode)
    // 追加css style
    setStyle('theme', cssContent)
    // html更新信息
    document?.querySelector('html')?.setAttribute('theme', newValue.theme)
    document?.querySelector('html')?.setAttribute('class', newValue.mode)
    // 持久化更新信息
    storageLocal.setItem('theme', themeState)
  },
  { deep: true, immediate: true },
)

// 生成主题
function genThemeCssContent(currentTheme, currentMode) {
  // auto时获取系统主题
  if (currentMode === 'auto') {
    return
  }

  // 处理配置变量
  // mode覆盖theme
  const theme = merge({}, currentTheme.theme, currentTheme.mode[currentMode])

  // 遍历不同框架配置
  const cssContent = currentTheme.frames
    .map((frame) => {
      // bugu

      if (frame.name === 'bugu') {
      } else if (frame.name === 'element-plus') {
      }

      // 遍历框架需要重写的变量
      return frame.list
        .map((item) => {
          // 排除无效数据
          if (!theme[item]) {
            return
          }

          // 主题色生成
          if (item === 'themeColor') {
            return Object.keys(theme[item].value)
              .map((key) => {
                return genElementPlusThemeColorCssContent(frame.pre, key, theme[item].value[key])
              })
              .join('')
          }

          // 主题色以外的通用变量生成
          return Object.keys(theme[item].value)
            .map((key) => {
              return calcVarList(frame.pre, key, theme[item].value[key], item, frame.config)
            })
            .join('')
        })
        .join('')
    })
    .join('')

  return `html.${currentMode} {${cssContent}}`
}

// 根据配置处理主题色变量
function calcVarList(pre, key, value, varString, config, isTarget = true) {
  if (!isTarget) {
    return ''
  }
  if (!value) {
    console.log(`--${pre}-${kebabCase(varString)}-${key}变量缺少值`)
    return ''
  }

  if (!config) {
    return ''
  }

  let res = `--${pre}-${kebabCase(varString)}-${key}: ${value} !important;`

  if (key === '') {
    res = `--${pre}-${kebabCase(varString)}: ${value} !important;`
  }

  return res
}

/**
 * 修改 element-plus的主题色
 */
function genElementPlusThemeColorCssContent(pre: string, type: string, baseColor: string): string {
  const rgbWhite = {
    r: 255,
    g: 255,
    b: 255,
  }
  const rgbBlack = {
    r: 0,
    g: 0,
    b: 0,
  }
  // element-plus 覆盖变量
  const colorArray: Record<string, string>[] = [
    {
      styleName: `--${pre}-color-${type}-rgb`,
      value: `${Object.values(hexToRGB(baseColor)).join(',')}`,
    },
    {
      styleName: `--${pre}-color-${type}`,
      value: rgbToHex(mix(hexToRGB(baseColor), rgbBlack, 0)),
    },
    {
      styleName: `--${pre}-color-${type}-dark-2`,
      value: rgbToHex(mix(hexToRGB(baseColor), rgbBlack, 0.2)),
    },
    {
      styleName: `--${pre}-color-${type}-light-3`,
      value: rgbToHex(mix(hexToRGB(baseColor), rgbWhite, 0.3)),
    },
    {
      styleName: `--${pre}-color-${type}-light-5`,
      value: rgbToHex(mix(hexToRGB(baseColor), rgbWhite, 0.5)),
    },
    {
      styleName: `--${pre}-color-${type}-light-7`,
      value: rgbToHex(mix(hexToRGB(baseColor), rgbWhite, 0.7)),
    },
    {
      styleName: `--${pre}-color-${type}-light-8`,
      value: rgbToHex(mix(hexToRGB(baseColor), rgbWhite, 0.78)),
    },
    {
      styleName: `--${pre}-color-${type}-light-9`,
      value: rgbToHex(mix(hexToRGB(baseColor), rgbWhite, 0.85)),
    },
  ]

  return colorArray.map((item) => `${item.styleName}:${item.value} !important;`).join('')
}

export { themeState }
