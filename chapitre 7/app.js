let message = {
    props: {
        myClass: {type: [String, Number], default: "success"},
        message: String,
        header: String
    },
    methods: {
      close () {
          this.$emit('close')
      }
    },
    template: `<div class="message" :class="myClass">
        <i @click="close">fermer</i>
        <p class="header">{{ header }}</p>
        <p>{{ message }}</p>
   
    </div>`
};

let counter = {
    data: function() {
      return {
          count: 0
      }
    },
    props: {
        start: {type: Number, default: 0}
    },
    computed: {
      total: function () {
          return this.start + this.count
      }
    },
    methods: {
      increment: function () {
          this.count ++
      }  
    },
    template: `<div>
        <button @click="increment">{{ total }}</button>
    </div>`
};

let formUser = {
    props: {
        value: Object
    },
    data () {
        return {
            user: {...this.value}
        }
    },
    methods: {
      save() {
          this.$emit('input', this.user)
      }
    },
    template: `
        <form @submit.prevent="save">
            <slot name="header"></slot>
            <div class="field">
                <label for="">Prénom</label>
                <input type="text" v-model="user.firstname">
            </div>
            <div class="field">
                <label for="">Nom</label>
                <input type="text" v-model="user.lastname">
            </div>
            <button type="submit">valider</button>
            <slot name="footer"></slot>
        </form>
    `,
    mounted() {
        console.log(this.$slots);
    }
};

let vm = new Vue({
  el: '#app',
  components: {
      message,
      counter,
      formUser
  },
  data: {
    message: 'Bonjour',
    alert: false,
    user: {
        firstname: 'Jean',
        lastname: 'Dupont'
    }
  },
  methods: {
      showAlert () {
          this.alert = true
      },
      hideAlert() {
          this.alert = false
      }
  }
});