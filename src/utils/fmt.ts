export interface AssistData {
  name: string
  apis: Array<AssistApi>
}

export interface AssistApi {
  url: string
  // headers: {
  //   isToken: false;
  // };
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  dataType?: string
  commented: string
}

/**
 * 首字母大写
 */
export function upperFirst(str): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 首字母大写
 * @param {*} params  参数
 */
export function fmtFirstUpperCase(params: string): string {
  return params[0].toUpperCase() + params.slice(1).toLowerCase()
}

/**
 * 请求参数处理
 * @param {*} params  参数
 */
export function fmtParams(params): string {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    const part = encodeURIComponent(propName) + '='
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== '' && typeof value[key] !== 'undefined') {
            const params = propName + '[' + key + ']'
            const subPart = encodeURIComponent(params) + '='
            result += subPart + encodeURIComponent(value[key]) + '&'
          }
        }
      } else {
        result += part + encodeURIComponent(value) + '&'
      }
    }
  }
  return result
}
