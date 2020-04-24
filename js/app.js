let vm = new Vue({
   el: '#app',
   data: {
       success: false,
       message: '',
       firstname: "Jean",
       lastname: "Delatour",
       fullname: ''
   },
   watch: {
       fullname: function (value) {
           console.log('watch', value)
       }
   }
});