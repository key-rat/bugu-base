import { debounce } from 'lodash'

const map = new WeakMap()
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    // 获取dom元素的回调
    const handler = map.get(entry.target)
    if (handler) {
      // 将监听的值给回调函数
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize,
      })
    }
  }
})

export const Resize = {
  mounted(el, binding) {
    // 获取指令的参数，如果没有提供则使用默认的 300ms
    const debounceDelay = binding.arg || 300
    // 创建防抖回调函数
    const debouncedHandler = debounce(binding.value, debounceDelay)

    // 将防抖后的回调函数保存到 map 中
    map.set(el, debouncedHandler)

    // 监听 el 元素的变化
    ob.observe(el)
  },
  unmounted(el) {
    // 取消监听
    ob.unobserve(el)
  },
}

export default Resize
