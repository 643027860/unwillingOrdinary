/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\home\\vuepress-boke\\talent-baoda\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-11473a3b",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-11473a3b").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-5ab85aa4",
    path: "/frontEnd/vue/vue-cli/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5ab85aa4").then(next)
    },
  },
  {
    path: "/frontEnd/vue/vue-cli/index.html",
    redirect: "/frontEnd/vue/vue-cli/"
  },
  {
    name: "v-53752e80",
    path: "/frontEnd/vue/vue-router/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-53752e80").then(next)
    },
  },
  {
    path: "/frontEnd/vue/vue-router/index.html",
    redirect: "/frontEnd/vue/vue-router/"
  },
  {
    name: "v-328ffa76",
    path: "/frontEnd/vuepress/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-328ffa76").then(next)
    },
  },
  {
    path: "/frontEnd/vuepress/index.html",
    redirect: "/frontEnd/vuepress/"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-b1302994",
    path: "/tag/脚手架/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-b1302994").then(next)
    },
    meta: {"pid":"tags","id":"脚手架"}
  },
  {
    path: "/tag/脚手架/index.html",
    redirect: "/tag/脚手架/"
  },
  {
    name: "v-4081041c",
    path: "/tag/router/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-4081041c").then(next)
    },
    meta: {"pid":"tags","id":"router"}
  },
  {
    path: "/tag/router/index.html",
    redirect: "/tag/router/"
  },
  {
    name: "v-322a45da",
    path: "/tag/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-322a45da").then(next)
    },
    meta: {"pid":"tags","id":"vue"}
  },
  {
    path: "/tag/vue/index.html",
    redirect: "/tag/vue/"
  },
  {
    name: "v-7f0789a7",
    path: "/categories/Vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-7f0789a7").then(next)
    },
    meta: {"pid":"categories","id":"Vue"}
  },
  {
    path: "/categories/Vue/index.html",
    redirect: "/categories/Vue/"
  },
  {
    name: "v-7f958298",
    path: "/categories/工具/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-7f958298").then(next)
    },
    meta: {"pid":"categories","id":"工具"}
  },
  {
    path: "/categories/工具/index.html",
    redirect: "/categories/工具/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]