import { createApp, h } from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {});
    }
  },
  handleInstance: () => {}
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
