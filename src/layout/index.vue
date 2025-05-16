<template>
  <div class="app-layout-head">
    <div class="logo">{{ $t('demos.logo') }}</div>
    <BTheme />
  </div>
  <div class="app-layout-body">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { $t } from '@/locales'
</script>
<style lang="scss">
.app-layout-head {
  @include flex-box(row, space-between);
  @extend %pane_shadow;
  width: 100%;
  height: var(--b-layout-head-h);
  box-sizing: border-box;
  position: sticky;
  top: 16px;
  background-color: var(--el-bg-color);
  .logo {
    font-size: 20px;
    font-weight: bolder;
    color: var(--el-text-color-primary);
    cursor: default;
  }
}

.app-layout-body {
  width: 100%;
  min-height: calc(100% - 2rem - var(--b-layout-head-h));
}
</style>
