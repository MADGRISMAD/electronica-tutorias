<template>
  <!-- Container -->
  <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
    <!-- Registration/Login component -->
    <div class="flex shadow-md">
      <!-- Registration/Login form -->
      <div class="flex flex-wrap content-center justify-center bg-white" style="width: 48rem; height: 42rem;">
        <!-- Left Column -->
        <div class="w-1/2 p-8">
          <!-- Heading -->
          <h1 class="text-xl font-semibold">Bienvenido</h1>
          <small class="text-gray-400">Completa tu registro</small>

          <!-- Registration Steps -->
          <div class="mt-4">
            <div :class="{ 'text-purple-700 border-b-2 border-purple-700': activeStep === 1 }">
              Paso 1: Datos personales
            </div>
            <div :class="{ 'text-purple-700 border-b-2 border-purple-700': activeStep === 2 }">
              Paso 2: Detalles académicos
            </div>
            <div :class="{ 'text-purple-700 border-b-2 border-purple-700': activeStep === 3 }">
              Paso 3: Configuración de cuenta
            </div>
          </div>

          <!-- Form Steps -->
          <div class="mt-4">
            <form v-if="activeStep === 1" @submit.prevent="nextStep">
              <!-- Step 1: Datos personales -->
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Nombre Completo</label>
                <input
                  type="text"
                  v-model="formData.nombreCompleto"
                  placeholder="Ej. Juan Pérez"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Apellido Paterno</label>
                <input
                  type="text"
                  v-model="formData.apellidoPaterno"
                  placeholder="Ej. Pérez"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Apellido Materno</label>
                <input
                  type="text"
                  v-model="formData.apellidoMaterno"
                  placeholder="Ej. Gómez"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Número de Control</label>
                <input
                  type="text"
                  v-model="formData.numeroDeControl"
                  placeholder="Ej. 123456789"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <button
                  type="submit"
                  class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Siguiente
                </button>
              </div>
            </form>

            <form v-else-if="activeStep === 2" @submit.prevent="nextStep">
              <!-- Step 2: Detalles académicos -->
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Carrera</label>
                <select
                  v-model="formData.carrera"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                >
                  <option value="ingenieria">Ingeniería</option>
                  <option value="ciencias">Ciencias</option>
                  <!-- Add other options as needed -->
                </select>
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Semestre Actual</label>
                <input
                  type="text"
                  v-model="formData.semestreActual"
                  placeholder="Ej. 3"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <button
                  type="submit"
                  class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Siguiente
                </button>
              </div>
            </form>

            <form v-else-if="activeStep === 3" @submit.prevent="register">
              <!-- Step 3: Configuración de cuenta -->
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Contraseña</label>
                <input
                  type="password"
                  v-model="formData.contraseña"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Confirmar Contraseña</label>
                <input
                  type="password"
                  v-model="formData.confirmarContraseña"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <button
                  type="submit"
                  class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Right Column -->
        <div class="w-1/2 p-8">
          <div class="mb-3">
            <!-- Display an image or content related to the registration process -->
            <img
              class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src="https://i.imgur.com/9l1A4OS.jpeg"
            />
          </div>
        </div>
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
        apellidoPaterno: '',
        apellidoMaterno: '',
        numeroDeControl: '',
        carrera: '',
        semestreActual: '',
        contraseña: '',
        confirmarContraseña: '',
      },
      activeStep: 1,
      rememberMe: false
    };
  },
  methods: {
    nextStep() {
      this.activeStep++;
    },
    async register() {
      try {
        // Validations
        if (!this.formData.contraseña || !this.formData.confirmarContraseña) {
          console.warn('Por favor, completa la configuración de cuenta.');
          return;
        }

        // Additional validations for other registration fields
        if (this.formData.contraseña !== this.formData.confirmarContraseña) {
          console.warn('Las contraseñas no coinciden.');
          return;
        }

        // Simulated response (adjust as needed)
        console.log('Registro exitoso. Datos del nuevo usuario:', this.formData);
      } catch (error) {
        console.error('Error al registrar usuario:', error.message);
      }
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
