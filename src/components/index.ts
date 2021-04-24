
import _Vue from "vue";

import TestComponent from './test-component.vue';

export {
  TestComponent,
};

export default function install(Vue: typeof _Vue) {
  // In alphabetical order:
  Vue.component('test-component', TestComponent);
}