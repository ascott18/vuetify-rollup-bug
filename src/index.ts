import { PluginObject } from 'vue';
import ComponentsInstaller from './components';

const Plugin = <PluginObject<any>>{
  install(Vue, options) {
    Vue.use(ComponentsInstaller)
  }
}

export * from './components';
export default Plugin;