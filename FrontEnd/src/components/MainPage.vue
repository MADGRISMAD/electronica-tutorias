<template>
  
    <SidebarComponent  />

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
  
</template>

<script>
import SidebarComponent from './SidebarComponent.vue';

export default {
  components: {
    SidebarComponent,
  },

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
