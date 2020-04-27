/*
Vue.directive('salut', function (e, binding) {
    console.log('bind')
});
 */

let salut = function (e, binding, vnode) {
    console.log('bind')
};

let vm = new Vue({
  el: '#app',
  directives: {
      salut
  },
  data: {
    message: 'Jean'
  },
  methods : {
       demo: function (e) {
           console.log('Click on', e.target);
       },
      filter: function (e) {
          console.log("keyup",e);
          e.target.value = e.target.value.replace(' ', '-')
      }
  }
});