<template>
  <PaymentForm />
</template>

<script>
import PaymentForm from './components/PaymentForm/PaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentForm,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
