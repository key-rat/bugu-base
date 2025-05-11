<script setup lang="ts">
import { useLayoutStore } from './stores'

const onResize = (dom) => {
  // dom为元素变化后的宽高
  const layoutStore = useLayoutStore()
  layoutStore.layout = Object.assign({}, layoutStore.layout, dom)
}
</script>

<template>
  <div class="app-layout" v-resize:100="onResize">
    <RouterView />
  </div>
</template>

<style lang="scss">
@use '@/style/index.scss';

/* ===============
//    自定义页面样式 app铺满画面
//    =============== */
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}

.app-layout {
  width: 100%;
  height: 100%;
  @include flex-box(column, flex-start);
}
</style>
