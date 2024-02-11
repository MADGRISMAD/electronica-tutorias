<template>
  <div class="app">
    <component :is="currentComponent" @switchComponent="switchComponent" />
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/ResgisterComponent.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    LoginComponent,
    RegisterComponent,
    MainPage,

  },
  data() {
    return {
      currentComponent: 'RegisterComponent',
    };
  },
  methods: {
    switchComponent(componentName) {
      this.currentComponent = componentName;
    },
  },
};
</script>

<style>

</style>
