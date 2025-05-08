<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils/index";
import { ElConfigProvider } from "element-plus";
import { LanguageType } from "./stores/interface";
import en from "element-plus/es/locale/lang/en";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { useUserStore } from "@/stores/modules/user";

const userStore = useUserStore();

// init language
const i18n = useI18n();
onMounted(() => {
  const language = userStore.language ?? getBrowserLang();
  i18n.locale.value = language;
  userStore.setGlobalState("language", language as LanguageType);
});

// element language
const locale = computed(() => {
  if (userStore.language == "zh") return zhCn;
  if (userStore.language == "en") return en;
  return getBrowserLang() == "zh" ? zhCn : en;
});
</script>
