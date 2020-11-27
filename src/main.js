// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/vuexcart'
import axios from '@/utils/request'
// import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
// import router from './router/vuex-select.js'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts,
Vue.use(Vant);
Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.filter('format', function(value, arg) {
        function dateFormat(date, format) {
            if (typeof date === "string") {
                var mts = date.match(/(\/Date\((\d+)\)\/)/);
                if (mts && mts.length >= 3) {
                    date = parseInt(mts[2]);
                }
            }
            date = new Date(date);
            if (!date || date.toUTCString() == "Invalid Date") {
                return "";
            }
            var map = {
                "M": date.getMonth() + 1, //月份 
                "d": date.getDate(), //日 
                "h": date.getHours(), //小时 
                "m": date.getMinutes(), //分 
                "s": date.getSeconds(), //秒 
                "q": Math.floor((date.getMonth() + 3) / 3), //季度 
                "S": date.getMilliseconds() //毫秒 
            };
            format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
                var v = map[t];
                if (v !== undefined) {
                    if (all.length > 1) {
                        v = '0' + v;
                        v = v.substr(v.length - 2);
                    }
                    return v;
                } else if (t === 'y') {
                    return (date.getFullYear() + '').substr(4 - all.length);
                }
                return all;
            });
            return format;
        }
        return dateFormat(value, arg)
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})