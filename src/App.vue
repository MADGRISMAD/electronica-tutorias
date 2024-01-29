<template>
  <div class="app">
    <LoginComponent @login="handleLogin" />
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue';

export default {
  name: 'App',
  components: {
    LoginComponent,
  },
  methods: {
    handleLogin(formData) {
      // Puedes manejar la lógica de inicio de sesión aquí o enviar los datos al backend
      console.log('Formulario de inicio de sesión enviado:', formData);
    },
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
