<template>
    <div>
      <!-- Barra lateral -->
      <div class="flex">
        <div class="w-1/4 bg-gray-800 p-4">
          <!-- Información del Usuario -->
          <div class="flex items-center mb-4">
            <img
              class="w-10 h-10 rounded-full mr-2"
              src="https://placekitten.com/50/50"  
            />
            <div>
              <div class="text-white font-semibold">Nombre del Estudiante</div>
              <div class="text-gray-400 text-sm">Programa de Electrónica</div>
            </div>
          </div>
  
          <!-- Menú de Navegación -->
          <nav class="mb-6">
            <ul>
              <li><router-link to="/dashboard">Panel de Control</router-link></li>
              <li><router-link to="/avance-tutorias">Avance Tutorías</router-link></li>
              <li><router-link to="/programar-tutoria">Programar Tutoría</router-link></li>
              <li><router-link to="/documentacion">Documentación</router-link></li>
              <!-- Agrega más enlaces según sea necesario -->
            </ul>
          </nav>
  
          <!-- Configuración de Modo Oscuro -->
          <div class="mb-4">
            <label class="text-white">Modo Oscuro</label>
            <input type="checkbox" v-model="modoOscuro" class="ml-2" @change="toggleModoOscuro" />
          </div>
        </div>
  
        <!-- Contenido principal -->
        <div class="w-3/4 p-4">
          <!-- Contenido dinámico se renderizará aquí -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        modoOscuro: false,
      };
    },
    methods: {
      toggleModoOscuro() {
        // Implementa la lógica para cambiar el tema a modo oscuro
        // Puedes usar clases en el cuerpo del documento o en un contenedor específico
        document.body.classList.toggle('modo-oscuro', this.modoOscuro);
      },
    },
  };
  </script>
  
  <style>
  /* Estilos específicos para el modo oscuro */
  .modo-oscuro {
    background-color: #1a202c;
    color: #cbd5e0;
  }
  </style>
  