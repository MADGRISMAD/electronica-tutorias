<template> 
    <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 ">
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

                    <span class="mx-4 font-medium">Dashboard</span>
                </a>

                <!-- Opciones de navegación adicionales -->
                <a v-for="(option, index) in navigationOptions" :key="index"
                    class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                    :href="option.link">
                    <svg v-if="option.icon" class="w-5 h-5" :viewBox="option.iconViewBox" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path v-if="option.iconPath" :d="option.iconPath" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <span class="mx-4 font-medium">{{ option.label }}</span>
                </a>
            </nav>

            <div class="flex items-center px-4 -mx-2">
                <img class="object-cover mx-2 rounded-full h-9 w-9"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="avatar" />
                <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
                    John Doe
                </h4>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            navigationOptions: [
                {
                    label: "Gestión de Tutorías",
                    link: "#",
                    icon: true, // Puedes ajustar si deseas iconos en las opciones
                    iconViewBox: "0 0 24 24",
                    iconPath:
                        "M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z",
                },
                {
                    label: "Seguimiento Académico",
                    link: "#",
                    icon: true,
                    iconViewBox: "0 0 24 24",
                    iconPath:
                        "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                },
                {
                    label: "Recursos Educativos",
                    link: "#",
                    icon: true,
                    iconViewBox: "0 0 24 24",
                    iconPath:
                        "M12 14V12M12 14V16M12 14L16 10M12 14L8 10",
                },
                {
                    label: "Preguntas Frecuentes",
                    link: "#",
                    icon: true,
                    iconViewBox: "0 0 24 24",
                    iconPath:
                        "M21 12H3M21 12L17 16M21 12L17 8",
                },
                {
                    label: "Cerrar Sesión",
                    link: "#",
                    icon: true,
                    iconViewBox: "0 0 24 24",
                    iconPath:
                        "M6 18L18 6M6 6L18 18",
                },

                // Agrega más opciones de navegación según sea necesario
            ],
        };
    },
};
</script>
  
<style>
/* Estilos adicionales si es necesario */
</style>
  