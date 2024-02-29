<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://i.imgur.com/9l1A4OS.jpeg)">
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <div class="text-white font-semibold">Imagen de Registro</div>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Registro</h2>
            <p class="mt-3 text-gray-500 dark:text-gray-300">Completa los campos para crear una cuenta</p>
          </div>

          <div class="mt-8">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="nombres" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombres</label>
                <input type="text" name="nombres" id="nombres" v-model="formData.nombres" placeholder="Ej. Juan" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-purple-700 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div class="mb-3">
                <label for="apellidos" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellidos</label>
                <input type="text" name="apellidos" id="apellidos" v-model="formData.apellidos" placeholder="Ej. Pérez" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-purple-700 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div class="mb-3">
                <label for="numeroDeControl" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Número de control</label>
                <input type="text" name="numeroDeControl" id="numeroDeControl" v-model="formData.numeroDeControl" placeholder="Ej. 123456A" pattern="[0-9]{6}[A-Za-z]" title="Debe tener 6 dígitos seguidos de una letra" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-purple-700 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div class="mb-3">
                <label for="carrera" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Carrera</label>
                <select name="carrera" id="carrera" v-model="formData.carrera" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-purple-700 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40">
                  <option value="" disabled selected>Selecciona una carrera</option>
                  <option v-for="(carrera, index) in carreras" :key="index" :value="carrera">{{ carrera }}</option>
                </select>
                <span class="text-red-500 text-sm" v-if="errores.carrera">{{ errores.carrera }}</span>
              </div>

              <div class="mb-3">
                <label for="semestreActual" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Semestre Actual</label>
                <input type="number" name="semestreActual" id="semestreActual" v-model="formData.semestreActual" placeholder="Ej. 3" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-purple-700 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
                <span class="text-red-500 text-sm" v-if="errores.semestreActual">{{ errores.semestreActual }}</span>
              </div>

              <div class="mb-3">
                <label for="contrasena" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                <input type="password" name="contrasena" id="contrasena" v-model="formData.contrasena" placeholder="*****" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-purple-700 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
                <span class="text-red-500 text-sm" v-if="errores.contrasena">{{ errores.contrasena }}</span>
              </div>

              <div class="mb-3">
                <label for="confirmarContrasena" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar Contraseña</label>
                <input type="password" name="confirmarContrasena" id="confirmarContrasena" v-model="formData.confirmarContrasena" placeholder="*****" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-purple-700 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
                <span class="text-red-500 text-sm" v-if="errores.confirmarContrasena">{{ errores.confirmarContrasena }}</span>
              </div>

              <div class="mb-3">
                <button class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  Registrarse
                </button>
              </div>
            </form>

            <p class="mt-6 text-sm text-center text-gray-400">¿Ya tienes una cuenta? <router-link to="/login" class="text-purple-700 focus:outline-none focus:underline hover:underline">Inicia sesión</router-link>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL, AXIOS_CONFIG } from '../const';
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
      },
      carreras: ['Ingeniería Informática', 'Electrónica', 'Mecatrónica', 'Sistemas Computacionales'], // Lista de carreras
      errores: {}
    };
  },
  methods: {
    async register() {
      try {
        // Validación del formulario
        this.errores = {};
        if (!this.formData.nombres || !this.formData.apellidos || !this.formData.numeroDeControl || !this.formData.carrera || !this.formData.semestreActual || !this.formData.contrasena || !this.formData.confirmarContrasena) {
          console.warn('Por favor, completa todos los campos del formulario.');
          return;
        }
        if (this.formData.contrasena !== this.formData.confirmarContrasena) {
          this.errores.confirmarContrasena = 'Las contraseñas no coinciden';
          return;
        }
        if (parseInt(this.formData.semestreActual) < 1) {
          this.errores.semestreActual = 'El semestre debe ser mayor o igual a 1';
          return;
        }

        // Envío de datos al backend
        const response = await axios.put(API_URL + '/alumnos', this.formData, AXIOS_CONFIG);
        console.log(response);
        if (response.status === 200) {
          // console.log('Registro exitoso. Respuesta del backend:', response.data);
          this.$router.push("/")
        } 
        else if (response.status === 400){
          alert("Bad request")
        }
        else {
          console.warn('El backend respondió con un código de estado no esperado:', response.status);
        }
      } catch (error) {
        console.error('Error al registrar:', error.message);
      }
    },

    switchToLogin() {
      this.$router.replace('/login');
    }
  }
};
</script>

