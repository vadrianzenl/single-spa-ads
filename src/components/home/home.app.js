import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Home from './main.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: r => r(Home)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];