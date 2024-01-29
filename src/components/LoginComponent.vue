<template>
    <!-- Container -->
    <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <!-- Login component -->
      <div class="flex shadow-md">
        <!-- Login form -->
        <div
          class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
          style="width: 24rem; height: 32rem;"
        >
          <div class="w-72">
            <!-- Heading -->
            <h1 class="text-xl font-semibold">Bienvenido</h1>
            <small class="text-gray-400">Ingresa tus datos para iniciar sesión</small>
  
            <!-- Form -->
            <form class="mt-4" @submit.prevent="login">
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
                <label class="mb-2 block text-xs font-semibold">contraseña</label>
                <input
                  type="password"
                  v-model="formData.contrasena"
                  placeholder="*****"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
  
              <div class="mb-3 flex flex-wrap content-center">
                <input
                  id="remember"
                  type="checkbox"
                  v-model="rememberMe"
                  class="mr-1 checked:bg-purple-700"
                />
                <a href="#" class="text-xs font-semibold text-purple-700">Olvidaste tu contraseña?</a>
              </div>
  
              <div class="mb-3">
                <button
                  class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                >
                  Inicia sesión
                </button>
              </div>
            </form>
  
            <!-- Footer -->
            <div class="text-center">
              <span class="text-xs text-gray-400 font-semibold">No tienes una cuenta?</span>
              <a href="#" class="text-xs font-semibold text-purple-700">Registrate</a>
            </div>
          </div>
        </div>
  
        <!-- Login banner -->
        <div
          class="flex flex-wrap content-center justify-center rounded-r-md"
          style="width: 24rem; height: 32rem;"
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
  import axios from 'axios';
  export default {
    name: 'LoginComponent',
    data() {
      return {
        formData: {
          numeroDeControl: '',
          contrasena: ''
        },
        rememberMe: false
      };
    },
    methods: {
      async login() {
        try {
          // Validaciones de formulario
          if (!this.formData.numeroDeControl || !this.formData.contrasena) {
            console.warn('Por favor, completa todos los campos del formulario.');
            return;
          }
  
          // Descomentar la línea siguiente cuando estés listo para probar con el backend real
          // const response = await axios.post('/api/login', this.formData);
  
          // Simulación de respuesta del backend (puedes ajustar esto según tus necesidades)
          const response = await axios.post('/api/login', this.formData)
          const fakeApiResponse = {
            status: 200,
            data: {
              token: 'tu_token_simulado',
              usuario: {
                nombre: 'Usuario Simulado',
                email: 'usuario@simulado.com'
              }
            }
          };
          console.log(response);
          if (fakeApiResponse.status === 200) {
            console.log('Inicio de sesión exitoso. Respuesta simulada del backend:', fakeApiResponse.data);
          } else {
            console.warn('El backend simulado respondió con un código de estado no esperado:', fakeApiResponse.status);
          }
        } catch (error) {
          console.error('Error al iniciar sesión:', error.message);
        }
      }
    }
  };
  </script>
  
  