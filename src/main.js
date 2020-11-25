/*
 * @Descripttion: 
 * @version: 
 * @Author: jlunli
 * @Date: 2020-11-23 10:39:53
 * @LastEditors: jlunli
 * @LastEditTime: 2020-11-24 17:24:56
 */
import Vue from 'vue'
import store from './store/store';
import App from './App.vue';
import VueRouter from 'vue-router'
// if (process.env.NODE_ENV == 'development') {
//     console.log(1)
//     Vue.config.devtools = true;
// } else {
//     console.log(2)
//     Vue.config.devtools = false;
// }
const Foo = ()=>Promise.resolve({ template: '<div>foo</div>',mounted:function(){
    console.log(this)
  }})
const Bar =()=> Promise.resolve({ template: '<div>bar</div>',mounted:function(){
    console.log(this)
  } })

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
const router = new VueRouter({
routes // (缩写) 相当于 routes: routes
})
Vue.use(VueRouter)
function component() {
  var element = document.createElement('div');
  element.id="app";

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webp3dd3344ssff'], ' ');

  return element;
}

document.body.appendChild(component());
let vueComponent=new Vue({
    el: '#app',
    store: store,
    router,
    render: h => h(App)
  })
  export default vueComponent;
