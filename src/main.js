import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let str='asdasdasdasdasdasd'
let names = str.split('')
let countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name] ++
  }
  else {
    allNames[name]=1
  }
  return allNames
},{})
console.log(countedNames);

let arr = [{ a: 100 }, { a: 20 }, { a: -10 }]
let sum = arr.reduce(function (first, item) {
  return first +item.a
}, 0)
console.log(sum);


