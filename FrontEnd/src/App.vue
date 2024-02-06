<template>
  <div class="app">
    <component :is="currentComponent" @switchComponent="switchComponent" />
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/ResgisterComponent.vue';

export default {
  name: 'App',
  components: {
    LoginComponent,
    RegisterComponent,
  },
  data() {
    return {
      currentComponent: 'LoginComponent',
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
