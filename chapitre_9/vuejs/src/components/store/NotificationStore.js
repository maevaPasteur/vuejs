class NotificationStore {

  constructor() {
    this.state = {
      count: 0
    }
  }

  increment() {
    this.state.count++
  }

  drecrement() {
    this.state.count--
  }

}

export default new NotificationStore();
