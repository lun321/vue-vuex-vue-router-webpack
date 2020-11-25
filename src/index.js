/*
 * @Descripttion: 
 * @version: 
 * @Author: jlunli
 * @Date: 2020-11-24 15:02:48
 * @LastEditors: jlunli
 * @LastEditTime: 2020-11-24 17:21:58
 */
import _ from 'lodash';
import vueComponent from './main.js';
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webp3dd3344ssff'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());