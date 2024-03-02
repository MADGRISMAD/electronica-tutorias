<template>
    <div class="flex flex-col min-h-screen bg-gray-900 text-white">
      <NavBarComponent />
      <div class="flex flex-col items-center justify-center flex-1">
        <div class="max-w-lg w-full p-8 bg-gray-800 rounded-lg shadow-lg text-center">
          <h2 class="text-3xl font-bold mb-4">Solicitar Inicio del Proceso de Liberación</h2>
          <p class="text-lg mb-6">
            ¡Bienvenido! Al iniciar el proceso de liberación, estarás dando el primer paso hacia la consecución de tu objetivo. Este proceso te permitirá gestionar eficazmente la liberación de recursos y garantizar un flujo de trabajo eficiente.
          </p>
          <p class="text-lg mb-6">
            Antes de proceder, asegúrate de haber revisado todas las políticas y procedimientos pertinentes. Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nuestro equipo de soporte.
          </p>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg focus:outline-none"
            @click="startReleaseProcess"
          >
            Iniciar Proceso de Liberación
          </button>
          <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBarComponent from './NavBarComponent.vue';
  
  export default {
    components: {
      NavBarComponent,
    },
    data() {
      return {
        errorMessage: '',
      };
    },
    methods: {
      startReleaseProcess() {
        console.log('Solicitando iniciar proceso de liberación...');
        // Aquí puedes agregar la lógica para la solicitud HTTP o cualquier otra acción necesaria
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el componente */
  </style>
  