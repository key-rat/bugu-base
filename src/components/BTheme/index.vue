<template>
  <div class="tool-box">
    <el-switch
      v-model="currentModeSwitch"
      class="mt-2"
      inline-prompt
      :active-action-icon="Moon"
      :inactive-action-icon="Sunny"
    />
    <el-dropdown>
      <div class="btn-icon-circle"><LanguageIcon /></div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            @click="changeLanguage(lang.value)"
            v-for="lang in LanguageList"
            :key="lang.value"
          >
            <span style="width: 10px; position: relative; right: 5px">
              {{ currentLocale === lang.value ? '·' : '' }}
            </span>
            {{ lang.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="btn-icon-circle" @click="settingDrawerIsShow = true"><Cog8ToothIcon /></div>
  </div>
  <el-drawer v-model="settingDrawerIsShow" :direction="direction" size="360px">
    <template #header>
      <h4>偏好设置</h4>
    </template>
    <template #default>
      <div class="setting-drawer-body">
        <div class="setting-drawer-pane">
          <div class="setting-drawer-pane-head">
            <span>主题</span>
          </div>
          <div class="setting-drawer-pane-body__row">
            <div
              class="btn-color-mode"
              :class="themeState.theme === item.name ? 'is-active' : ''"
              v-for="item in themeList"
              :key="item.name"
              @click="themeState.theme = item.name"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="setting-drawer-pane">
          <div class="setting-drawer-pane-head">
            <span>模式</span>
          </div>
          <div class="setting-drawer-pane-body__row">
            <div
              class="btn-dark-mode"
              :class="themeState.mode === item ? 'is-active' : ''"
              v-for="item in modeList"
              :key="item"
              @click="themeState.mode = item"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <!-- <div class="setting-drawer-pane setting-drawer-pane-color">
          <div class="setting-drawer-pane-head">
            <span>色调</span>
          </div>
          <div class="setting-drawer-pane-body__col">
            <div
              class="form__row"
              :class="currentTheme.darkMode === item ? 'is-active' : ''"
              v-for="item in darkModeList"
              :key="item"
              @click="currentTheme.darkMode = item"
            >
              <div class="form-line">
                <div class="form-line-label">主色调</div>
                <div class="form-line-value"></div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import type { DrawerProps } from 'element-plus'
import { themeList, modeList } from './preferences'
import { themeState } from '.'
import { changeLanguage, LanguageList, currentLocale } from '@/locales'
import { LanguageIcon, Cog8ToothIcon } from '@heroicons/vue/24/outline'

// 模式切换开关
const currentModeSwitch = computed({
  get: () => themeState.mode === 'dark',
  set: (newValue) => {
    const mode = newValue ? 'dark' : 'light'
    themeState.mode = mode
  },
})

const settingDrawerIsShow = ref(false)
const direction = ref<DrawerProps['direction']>('rtl')
const radio1 = ref('Option 1')

function cancelClick() {
  settingDrawerIsShow.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      settingDrawerIsShow.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>
<style lang="scss">
.setting-drawer-body {
  @include flex-box(column);
  box-sizing: border-box;
  gap: 20px;

  .setting-drawer-pane {
    width: 100%;
    .setting-drawer-pane-head {
      font-size: 20px;
      font-weight: bolder;
    }
    .setting-drawer-pane-body__row {
      width: 100%;
      padding: 10px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
    .setting-drawer-pane-body__col {
      width: 100%;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
}

.form__row {
  width: 100%;
  line-height: 1.5;
}
.btn-dark-mode {
  @extend %btn-style1;
  @extend %non-select;
  width: 100px;
  line-height: 2;
  text-align: center;
}
.btn-color-mode {
  @extend %btn-style1;
  @extend %non-select;
  width: 100px;
  line-height: 2;
  text-align: center;
}

.tool-box {
  @include flex-box(row, flex-start);
  // width: 200px;
  gap: 10px;
}
</style>
