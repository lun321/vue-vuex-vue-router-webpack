<!--
 * @Descripttion: 
 * @version: 
 * @Author: jlunli
 * @Date: 2020-11-23 10:39:53
 * @LastEditors: jlunli
 * @LastEditTime: 2020-11-24 17:33:28
-->
<template>
<div id="root">
  dddddddddddd
  <img alt="Vue logo" v-bind:src="logoImg">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="testReq">测试请求1</button>
  <button @click="jumpTo">路由</button>
  <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
  <Counter></Counter>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import logoImg from './assets/logo.png';
// import Cookie from './util/cookie'
import Axios from 'axios';
import { mapGetters, mapState } from 'vuex'
const Counter = {
  template: `<div>{{ count }}</div>`,
  mounted :function(){
    console.log(this)
  },
  computed: Object.assign({
    count1:()=>22
  },mapState({
    test:'test',
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + 1
    }
  }),mapGetters(['donecount']))
  // {
  //   count1:()=>33
  //   ...mapState({
  //   test:'test',
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,

  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: 'count',

  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.count + 1
  //   }
  // })
  // }
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
  },
  data:function(){
    return {
      logoImg
    }
  },
  methods:{
    testReq:function(){
      console.log(this.$store);
      this.$store.dispatch('main/increatement',{acount:5})
        //  Axios.post('/api/test').then((res) => {
        //    debugger
        //       console.log(res)
        //   }).catch((err) => {
 
        //       console.log(err)
 
        //   })
    },
    jumpTo:function(){
      this.$router.push({ path: 'foo'}).catch(err => {
    
    this.$router.replace({ path: 'foo' }).catch(err=>{
      console.log(err)
      console.log(this)
    })
});
    }
 
  }
}
</script>

<style>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
