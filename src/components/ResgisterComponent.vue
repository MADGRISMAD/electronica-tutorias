<template>
    <!-- Container -->
    <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <!-- Registration/Login component -->
      <div class="flex shadow-md">
        <!-- Registration/Login form -->
        <div
          class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
          style="width: 24rem; height: 38rem;"
        >
          <div class="w-72">
            <!-- Heading -->
            <h1 class="text-xl font-semibold">Bienvenido</h1>
            <small class="text-gray-400">Selecciona tu tipo de cuenta</small>
  
            <!-- Registration/Login Tabs -->
            <div class="mt-4">
              <button
                class="mr-2 text-sm font-semibold focus:outline-none"
                :class="{ 'text-purple-700 border-b-2 border-purple-700': activeTab === 'student' }"
                @click="activeTab = 'student'"
              >
                Alumno
              </button>
              <button
                class="text-sm font-semibold focus:outline-none"
                :class="{ 'text-purple-700 border-b-2 border-purple-700': activeTab === 'teacher' }"
                @click="activeTab = 'teacher'"
              >
                Maestro
              </button>
            </div>
  
            <!-- Form -->
            <form class="mt-4" @submit.prevent="register">
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Nombre Completo</label>
                <input
                  type="text"
                  v-model="formData.nombreCompleto"
                  placeholder="Ej. Juan Pérez"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
  
              <!-- Add other registration fields here (e.g., password, etc.) -->
  
              <div class="mb-3">
                <button
                  class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Registrar
                </button>
              </div>
            </form>
  
            <!-- Footer -->
            <div class="text-center">
              <span class="text-xs text-gray-400 font-semibold">¿Ya tienes una cuenta?</span>
              <a href="#" class="text-xs font-semibold text-purple-700">Inicia sesión</a>
            </div>
          </div>
        </div>
  
        <!-- Registration/Login banner -->
        <div
          class="flex flex-wrap content-center justify-center rounded-r-md"
          style="width: 24rem; height: 38rem;"
        >
          <img
            class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://i.imgur.com/9l1A4OS.jpeg"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        formData: {
          nombreCompleto: '',
          // Add other registration fields here (e.g., password, etc.)
        },
        activeTab: 'student', // Default to 'student', but can be changed to 'teacher'
        rememberMe: false
      };
    },
    methods: {
      async register() {
        try {
          // Validations
          if (!this.formData.nombreCompleto) {
            console.warn('Por favor, completa todos los campos del formulario.');
            return;
          }
  
          // Additional validations for other registration fields
  
          // Simulated response (adjust as needed)
          console.log('Registro exitoso. Datos del nuevo usuario:', this.formData);
        } catch (error) {
          console.error('Error al registrar usuario:', error.message);
        }
      }
    }
  };
  </script>
  