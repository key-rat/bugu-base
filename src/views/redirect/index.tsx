import {
  defineComponent,
  onBeforeMount,
  type RendererElement,
  type RendererNode,
  type VNode,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElEmpty } from 'element-plus'

const Redirect = defineComponent({
  name: 'Redirect',
  setup() {
    const route = useRoute()
    const router = useRouter()
    onBeforeMount(() => {
      const { params, query } = route
      const { path } = params
      router.replace({
        path: '/' + (Array.isArray(path) ? path.join('/') : path),
        query,
      })
    })
    return (): VNode<RendererNode, RendererElement, { [key: string]: unknown }> => {
      return <ElEmpty />
    }
  },
})

export default Redirect
