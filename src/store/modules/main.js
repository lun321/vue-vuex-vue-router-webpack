/*
 * @Descripttion: 
 * @version: 
 * @Author: jlunli
 * @Date: 2020-11-24 09:21:29
 * @LastEditors: jlunli
 * @LastEditTime: 2020-11-24 09:25:57
 */
const main={
    namespaced: true,
    state:{
        testmodules:2
    },
    mutations:{
        SET_INCREATEMENT(state,payload){
            state.testmodules+=payload.acount;
        }
    },
    actions:{
        increatement({commit},payload){
            commit("SET_INCREATEMENT",payload);
        }
    }

}
export default main;