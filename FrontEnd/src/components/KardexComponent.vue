<template>
    <NavBarComponent />
    <div class="flex h-screen bg-gray-900 text-white">
      <!-- Mostrar la retícula escolar -->
      <div class="w-full p-4 overflow-x-auto">
        <div class="flex flex-wrap">
          <div
            v-for="(semester, index) in semesters"
            :key="index"
            class="w-1/9 p-4 border border-gray-700"
          >
            <h2 class="text-lg font-semibold mb-2">Semestre {{ index + 1 }}</h2>
            <div v-for="(subject, sIndex) in semester" :key="sIndex" class="mb-4">
              <div class="bg-gray-800 p-4 rounded border border-gray-700">
                <p class="text-lg font-semibold">{{ subject.name }}</p>
                <p class="text-sm">Puntos: {{ Math.floor(Math.random() * 3) + 4 }}</p>
              </div>
            </div>
          </div>
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
        semesters: [
          // Agrega las materias del primer semestre aquí
          [
                    { name: 'Materia 1' },
                    { name: 'Materia 2' },
                    { name: 'Materia 3' },
                    { name: 'Materia 4' },
                    { name: 'Materia 5' },
                    { name: 'Materia 6' }
                ],
                [
                    { name: 'Materia 7' },
                    { name: 'Materia 8' },
                    { name: 'Materia 9' },
                    { name: 'Materia 10' },
                    { name: 'Materia 11' },
                    { name: 'Materia 12' }
                ],
                [
                    { name: 'Materia 13' },
                    { name: 'Materia 14' },
                    { name: 'Materia 15' },
                    { name: 'Materia 16' },
                    { name: 'Materia 17' },
                    { name: 'Materia 18' }
                ],
                [
                    { name: 'Materia 19' },
                    { name: 'Materia 20' },
                    { name: 'Materia 21' },
                    { name: 'Materia 22' },
                    { name: 'Materia 23' },
                    { name: 'Materia 24' }
                ],
                [
                    { name: 'Materia 25' },
                    { name: 'Materia 26' },
                    { name: 'Materia 27' },
                    { name: 'Materia 28' },
                    { name: 'Materia 29' },
                    { name: 'Materia 30' }
                ],
                [
                    { name: 'Materia 31' },
                    { name: 'Materia 32' },
                    { name: 'Materia 33' },
                    { name: 'Materia 34' },
                    { name: 'Materia 35' },
                    { name: 'Materia 36' }
                ],
                [
                    { name: 'Materia 37' },
                    { name: 'Materia 38' },
                    { name: 'Materia 39' },
                    { name: 'Materia 40' },
                    { name: 'Materia 41' },
                    { name: 'Materia 42' }
                ],
                [
                    { name: 'Materia 43' },
                    { name: 'Materia 44' },
                    { name: 'Materia 45' },
                    { name: 'Materia 46' },
                    { name: 'Materia 47' },
                    { name: 'Materia 48' }
                ],
                [
                    { name: 'Materia 49' },
                    { name: 'Materia 50' },
                    { name: 'Materia 51' },
                    { name: 'Materia 52' },
                    { name: 'Materia 53' },
                    { name: 'Materia 54' }
                ]
          // Agrega las materias del segundo semestre aquí
          // Repite el patrón para los siguientes semestres
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para el componente */
  </style>
  