<script setup lang="ts">
import { useLayoutStore } from './stores'
import { elementLocale } from '@/locales'

const onResize = (dom) => {
  // dom为元素变化后的宽高
  const layoutStore = useLayoutStore()
  layoutStore.layout = Object.assign({}, layoutStore.layout, dom)
}
</script>

<template>
  <div class="app-layout" v-resize:100="onResize">
    <el-config-provider :locale="elementLocale">
      <RouterView />
    </el-config-provider>
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
  color: var(--el-text-color-primary);
}

.app-layout {
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  @include flex-box(column, flex-start);
  background: var(--el-bg-color);
}
</style>
