class NotificationsStore {

    constructor() {
        this.state= {
            count: 0
        }
    }

    increment() {
        this.state.count ++
    }

    decrement() {
        this.state.count --
    }
}

let notifications_store = new NotificationsStore();

let Counter = {
    data() {
        return {
            state: notifications_store.state
        }
    },
    computed: {
      count() {
          return this.state.count
      }
    },
    methods: {
      increment() {
          notifications_store.increment()
      }
    },
    template: `<button @click="increment">
        {{ count }}
    </button>`
};

let Notifications = {
    components: {Counter},
    template: `<div>
        <counter></counter>
       <button @click="addNotification">+1 notif</button>
    </div>`,
    methods: {
        addNotification() {
            notifications_store.increment()
        }
    }
};

let vm = new Vue({
  el: '#app',
  data: {
    notifications_count: 0
  },
  components: {Counter, Notifications}
});