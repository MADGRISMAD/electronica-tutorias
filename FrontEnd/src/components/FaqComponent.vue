<template>
    <div class="flex">
      <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">Brand</h2>
  
        <div class="relative mt-6">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
  
          <input type="text"
            class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Search" />
        </div>
  
        <div class="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
              href="#">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
  
              <span class="mx-4 font-medium">Inicio</span>
            </a>
  
            <!-- Agregar otras opciones de navegación aquí -->
          </nav>
  
          <div class="flex items-center px-4 -mx-2">
            <img class="object-cover mx-2 rounded-full h-9 w-9"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar" />
            <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
          </div>
        </div>
      </div>
      <!-- Agregado el contenido de las preguntas frecuentes -->
      <div class="flex flex-col w-full">
        <section class="bg-white dark:bg-gray-900">
          <div class="container max-w-4xl px-6 py-10 mx-auto">
            <h1 class="text-4xl font-semibold text-center text-gray-800 dark:text-white">Preguntas Frecuentes</h1>
  
            <div class="mt-12 space-y-8">
              <!-- Iterando sobre el array de preguntas frecuentes -->
              <div v-for="(item, index) in faq" :key="index" class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button @click="toggleExpand(index)" class="flex items-center justify-between w-full p-8">
                  <h1 class="font-semibold text-gray-700 dark:text-white">{{ item.title }}</h1>
                  <span class="text-gray-400 bg-gray-200 rounded-full" v-if="!item.expanded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  </span>
                  <span class="text-gray-400 bg-gray-200 rounded-full" v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                </button>
                <hr class="border-gray-200 dark:border-gray-700">
                <!-- Mostrando el contenido solo si la pregunta está expandida -->
                <p v-if="item.expanded" class="p-8 text-sm text-gray-500 dark:text-gray-300">{{ item.content }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        modoOscuro: false,
        faq: [
          { title: '¿Cómo puedo solicitar una sesión de tutoría?', content: 'Para solicitar una sesión de tutoría, inicia sesión en el sistema y busca la opción de "Solicitar Tutoría" en tu panel de control. Completa el formulario proporcionando detalles sobre el tema que necesitas ayuda y tu disponibilidad.', expanded: false },
          { title: '¿Dónde puedo encontrar recursos educativos adicionales?', content: 'Puedes encontrar recursos educativos adicionales en el repositorio de recursos dentro del sistema. Explora las categorías disponibles y descarga los materiales que sean relevantes para tu aprendizaje.', expanded: false },
          { title: 'Do I need a referral?', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?', expanded: false },
        { title: 'What are your opening hours?', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?', expanded: false },
        { title: 'What can I expect at my first consultation?', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?', expanded: false },
        { title: 'Do I need a referral?', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?', expanded: false },
  
        ]
      };
    },
    methods: {
      toggleModoOscuro() {
        document.body.classList.toggle('modo-oscuro', this.modoOscuro);
      },
      toggleExpand(index) {
        this.faq[index].expanded = !this.faq[index].expanded;
      }
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
  