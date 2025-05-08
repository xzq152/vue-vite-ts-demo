import { defineStore } from "pinia";
import { UserState } from "@/stores/interface/index";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore("geeker-user", {
  state: (): UserState => ({
    // 当前系统语言
    language: null,
    token: "",
    userInfo: { name: "Geeker" }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },
    setGlobalState(...args: ObjToKeyValArray<UserState>) {
      this.$patch({ [args[0]]: args[1] });
    }
  },
  persist: piniaPersistConfig("geeker-user")
});
