<template>
  <div class="counter">
    Compteur : {{ count }}
    <button @click="increment">Incrémenter</button>
  </div>
</template>

<script>
  import store from '../store/NotificationStore';
  export default {
      data() {
          return {
              state: store.state
          }
      },
      computed: {
        count() {
            return this.state.count
        }
      },
      methods: {
          increment() {
              store.increment();
          }
      }
  }
</script>

<style lang="scss" src="./style.scss"></style>
