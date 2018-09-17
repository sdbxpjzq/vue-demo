import Vue from 'vue';
import Vuex from 'vuex';
import * as All from './modules/index';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    modules: {
        ...All,
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
});

// 访问
// this.$store.state.moduleA.name
