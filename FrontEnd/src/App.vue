<template>
  <div class="app">
    <!-- Llama al componente del sidebar -->
    <SidebarComponent @switchComponent="switchComponent" />

    <!-- Contenido principal (área de preguntas frecuentes) -->
    <div class="content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/ResgisterComponent.vue';
import MainPage from './components/MainPage.vue';
import FaqComponent from './components/FaqComponent.vue';

export default {
  name: 'App',
  components: {
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    MainPage,
    FaqComponent,
  },
  data() {
    return {
      currentComponent: 'FaqComponent',
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
.app {
  display: flex;
}

.content {
  flex: 1;
}
</style>
