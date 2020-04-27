Vue.filter('capitalize', function (value) {
    return value.toUpperCase()
});

Vue.filter('reverse', function (value) {
    return value.split('').reverse().join('')
});

Vue.filter('min', function (value) {
    return Math.floor(value / 60);
});

let name = function (value, firstname) {
    return value + ' ' + firstname;
};

let vm = new Vue({
  el: '#app',
  filters: {
    name
  },
  data: {
    message: 'Mon super message',
    message2: 'Bonjour'
  }
});