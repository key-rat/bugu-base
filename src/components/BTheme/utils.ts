export type RGB = {
  r: number
  g: number
  b: number
}

/**
 * 设置css style
 * @param styleId id
 * @param cssContent css
 */
function setStyle(styleId, cssContent) {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.id = styleId
  style.appendChild(document.createTextNode(cssContent))
  // 检查是否已经存在相同的 <style> 标签
  if (document.getElementById(styleId)) {
    document.getElementById(styleId)?.remove()
  }

  document.head.appendChild(style)
}

function componentToHex(c: number): string {
  const hex = Math.round(c).toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

function rgbToHex(rgb: RGB): string {
  return `#${componentToHex(rgb.r)}${componentToHex(rgb.g)}${componentToHex(rgb.b)}`
}

function mix(value: RGB, mixColor: RGB, weight: number): RGB {
  return {
    r: value.r * (1 - weight) + mixColor.r * weight,
    g: value.g * (1 - weight) + mixColor.g * weight,
    b: value.b * (1 - weight) + mixColor.b * weight,
  }
}

/**
 * hex 转换为 rgb
 * @param hex 例如 #FF0000
 */
function hexToRGB(hex: string): RGB {
  if (!/^[0-9A-Fa-f]{3}$|[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('请传入合法的16进制颜色值，eg: #FF0000')
  }
  // 移除可能存在的 # 符号
  hex = hex.replace('#', '')
  // 确保十六进制代码是有效的

  // 返回 RGB 对象
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  }
}

export { setStyle, rgbToHex, hexToRGB, mix }
