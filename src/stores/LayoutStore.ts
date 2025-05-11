export const useLayoutStore = defineStore('Layout', () => {
  const layout = ref({
    width: 0,
    height: 0,
  })
  return { layout }
})
