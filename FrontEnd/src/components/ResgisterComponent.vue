<template>
  <!-- Registro component -->
  <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
    <!-- Registro form -->
    <div class="flex shadow-md">
      <!-- Formulario de Registro -->
      <div class="flex flex-wrap content-center justify-center rounded-l-md bg-white" style="width: 24rem; height: 40rem;">
        <div class="w-72">
          <!-- Encabezado -->
          <h1 class="text-xl font-semibold">Registro</h1>
          <small class="text-gray-400">Completa los campos para crear una cuenta</small>

          <!-- Formulario -->
          <form class="mt-4" @submit.prevent="register">
            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Nombres</label>
              <input
                type="text"
                v-model="formData.nombres"
                placeholder="Ej. Juan"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Apellidos</label>
              <input
                type="text"
                v-model="formData.apellidos"
                placeholder="Ej. Pérez"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Número de control</label>
              <input
                type="text"
                v-model="formData.numeroDeControl"
                placeholder="Ej. 123456A"
                pattern="[0-9]{6}[A-Za-z]"
                title="Debe tener 6 dígitos seguidos de una letra"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Carrera</label>
              <input
                type="text"
                v-model="formData.carrera"
                placeholder="Ej. Ingeniería Informática"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Semestre Actual</label>
              <input
                type="number"
                v-model="formData.semestreActual"
                placeholder="Ej. 3"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Contraseña</label>
              <input
                type="password"
                v-model="formData.contrasena"
                placeholder="*****"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Confirmar Contraseña</label>
              <input
                type="password"
                v-model="formData.confirmarContrasena"
                placeholder="*****"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <button
                class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
              >
                Registrarse
              </button>
            </div>
          </form>

          <!-- Pie de página -->
          <div class="text-center">
            <span class="text-xs text-gray-400 font-semibold">¿Ya tienes una cuenta?</span>
            <a href="#" class="text-xs font-semibold text-purple-700" @click="switchToLogin">Inicia sesión</a>
          </div>
        </div>
      </div>

      <!-- Imagen de Registro -->
      <div class="flex flex-wrap content-center justify-center rounded-r-md" style="width: 24rem; height: 40rem;">
        <img
          class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
          src="https://i.imgur.com/9l1A4OS.jpeg" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from '../const';
export default {
  name: 'RegisterComponent',
  data() {
    return {
      formData: {
        nombres: '',
        apellidos: '',
        numeroDeControl: '',
        carrera: '',
        semestreActual: '',
        contrasena: '',
        confirmarContrasena: ''
      }
    };
  },
  methods: {
    async register() {
      try {
        // Realizar la solicitud POST al backend con Axios
        // const response = await axios.post('/api/registro', this.formData);

        // POR AHORA QUE NO TIENE SELECCIÓN DE TIPO
        const response = await axios.post( API_URL + '/alumnos/registro', this.formData);

        // Aquí puedes manejar la respuesta del backend
        console.log(response.data);

        // También puedes redirigir al usuario o realizar otras acciones según la respuesta
      } catch (error) {
        // Manejar errores de la solicitud
        console.error('Error al registrar:', error);
      }
    },
    switchToLogin() {
      this.$emit('switchComponent', 'LoginComponent');
    }
  }
};
</script>
