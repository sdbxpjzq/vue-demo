/* eslint-disable */
import Plupload from 'plupload';
import component from './Pluploader/component';

export default {
  install(Vue, opts = {}) {
    let {
      key = '$Plupload',
      tag = 'vue-plupload'
    } = opts
    let mixins = {
      created () {
        // 注入 Plupload
        this.Plupload = Plupload
      }
    }
    // 添加 component mixins 对象
    if (typeof component.mixins === 'array') {
      component.mixins.splice(0, 0, mixins)
    } else {
      component.mixins = [mixins]
    }
    // 注册标签
    Vue.component(tag, component)
  }
}