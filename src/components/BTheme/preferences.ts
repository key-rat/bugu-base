type ThemeValueType<T extends string | number> = {
  value: Record<string, T>
  config?: Record<string, unknown>
}

interface IBuguThemeMode {
  name: string
  theme: IBuguTheme
  mode: IBuguMode
  frames: Array<{
    name: string
    pre: string
    components: Record<string, unknown>
    list: Array<string>
    config: boolean
  }>
}

interface IBuguTheme {
  // 基础变量
  themeColor?: ThemeValueType<string>
  textColor?: ThemeValueType<string>
  fillColor?: ThemeValueType<string>
  bgColor?: ThemeValueType<string>
  borderColor?: ThemeValueType<string>
  borderRadius?: ThemeValueType<string>
  boxShadow?: ThemeValueType<string>
  fontFamily?: ThemeValueType<string>
  fontSize?: ThemeValueType<string>
  index?: ThemeValueType<number>
  disabled?: ThemeValueType<string>
  maskColor?: ThemeValueType<string>
  // 相对element-plus追加基础变量
  // padding?: ThemeValueType<string>
  // margin?: ThemeValueType<string>
  // gap?: ThemeValueType<string>
  layout?: ThemeValueType<string | number>
}

interface IBuguMode {
  light: IBuguTheme
  dark: IBuguTheme
  [key: string]: IBuguTheme
}

const themeDemo: IBuguThemeMode = {
  name: 'base',
  theme: {
    themeColor: {
      value: {
        primary: '#409eff',
        success: '#67c23a',
        warning: '#e6a23c',
        danger: '#f56c6c',
        error: '#f56c6c',
        info: '#909399',
      },
      config: {},
    },
    textColor: {
      value: {
        primary: '#303133',
        regular: '#606266',
        secondary: '#909399',
        placeholder: '#a8abb2',
        disabled: '#c0c4cc',
      },
      config: {},
    },
    fillColor: {
      value: {
        '': '#f0f2f5',
        light: '#f5f7fa',
        lighter: '#fafafa',
        'extra-light': '#fafcff',
        dark: '#ebedf0',
        darker: '#e6e8eb',
        blank: '#ffffff',
      },
      config: {},
    },
    bgColor: {
      value: {
        '': '#ffffff',
        page: '#f2f3f5',
        overlay: '#ffffff',
      },
      config: {},
    },
    borderColor: {
      value: {
        '': '#dcdfe6',
        light: '#e4e7ed',
        lighter: '#ebeef5',
        'extra-light': '#f2f6fc',
        dark: '#d4d7de',
        darker: '#cdd0d6',
      },
      config: {},
    },
    borderRadius: {
      value: {
        none: '0px',
        small: '2px',
        base: '5px',
        round: '20px',
        circle: '100%',
      },
      config: {},
    },
    boxShadow: {
      value: {
        '': '0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)',
        light: '0px 0px 12px rgba(0, 0, 0, .12)',
        lighter: '0px 0px 6px rgba(0, 0, 0, .12)',
        dark: '0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16)',
      },
      config: {},
    },
    fontFamily: {
      value: {
        '': "'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif",
      },
      config: {},
    },
    fontSize: {
      value: {
        'extra-large': '20px',
        large: '18px',
        medium: '16px',
        base: '14px',
        small: '13px',
        'extra-small': '12px',
      },
      config: {},
    },
    index: {
      value: {
        normal: 1,
        top: 1000,
        popper: 2000,
      },
      config: {},
    },
    disabled: {
      value: {
        'bg-color': '$fill-color-light',
        'text-color': '$text-color-placeholder',
        'border-color': '$border-color-light',
      },
      config: {},
    },
    maskColor: {
      value: {
        none: '0',
        light: '0.3',
        base: '0.9',
        dark: '0.9',
      },
      config: {
        baseColor: '#fff',
      },
    },
    layout: {
      value: {
        'app-w-min': '800px',
        'app-h-min': '400px',
        'head-h': '50px',
      },
      config: {},
    },
  },
  mode: {
    light: {},
    dark: {
      textColor: {
        value: {
          primary: '#E5EAF3',
          regular: '#CFD3DC',
          secondary: '#A3A6AD',
          placeholder: '#8D9095',
          disabled: '#6C6E72',
        },
        config: {},
      },
      fillColor: {
        value: {
          '': '#303030',
          light: '#414243',
          lighter: '#363637',
          'extra-light': '#191919',
          dark: '#39393A',
          darker: '#58585B',
          blank: 'transparent',
        },
        config: {},
      },
      bgColor: {
        value: {
          '': '#141414',
          page: '#0a0a0a',
          overlay: '#1d1e1f',
        },
        config: {},
      },
      borderColor: {
        value: {
          '': '#4C4D4F',
          light: '#262727',
          lighter: '#1D1D1D',
          'extra-light': '#191919',
          dark: '#58585B',
          darker: '#636466',
        },
        config: {},
      },
      boxShadow: {
        value: {
          '': '0px 12px 32px 4px rgba(225,225, 225, .04), 0px 8px 20px rgba(225, 225, 225, .08)',
          light: '0px 0px 12px rgba(225, 225,225, .12)',
          lighter: '0px 0px 6px rgba(225, 225, 225, .12)',
          dark: '0px 16px 48px 16px rgba(225, 225, 225, .08), 0px 12px 32px rgba(225, 225, 225, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16)',
        },
        config: {},
      },
    },
  },
  frames: [
    {
      name: 'bugu',
      pre: 'b',
      // 组件变量
      components: {},
      list: ['layout'],
      config: true,
    },
    {
      name: 'element-plus',
      pre: 'el',
      // 组件变量
      components: {},
      list: [
        'themeColor',
        'textColor',
        'fillColor',
        'bgColor',
        'borderColor',
        'borderRadius',
        'boxShadow',
        'fontFamily',
        'fontSize',
        'index',
        'disabled',
        'maskColor',
      ],
      config: true,
    },
  ],
}

/**
 * 默认基础主题结构
 * 逻辑：
 * basic css变量对象
 * overrideTarget 是否重写目标框架变量
 * config.unity 是否使用bugu变量
 *   */

// 主题列表,动态加载
const themeList = [themeDemo]

function setTheme(config) {
  return Object.assign(themeDemo, config)
}

// 主题明暗模式列表
const modeList = ['light', 'dark', 'auto']

export { themeList, modeList, setTheme }
