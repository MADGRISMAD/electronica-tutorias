<template>
    <NavBarComponent />
    <div class="flex flex-col min-h-screen bg-gray-900 text-white">
        
        <div class="flex items-center justify-center flex-1">
            <div class="max-w-lg w-full p-8 bg-gray-800 rounded-lg shadow-lg text-center">
                <h2 class="text-3xl font-bold mb-6">Datos del Tutor</h2>
                <div v-if="professorData">
                    <h3 class="text-xl font-semibold mb-2">Nombre del Tutor:</h3>
                    <p>{{ professorData.name }}</p>
                    <h3 class="text-xl font-semibold mb-2 mt-4">Email:</h3>
                    <p>{{ professorData.email }}</p>
                    <h3 class="text-xl font-semibold mb-2 mt-4">Teléfono:</h3>
                    <p>{{ professorData.phone }}</p>
                </div>
                <div v-else>
                    <p>No se encontraron datos del tutor.</p>
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
            professorData: null,
        };
    },
    created() {
        // Suponiendo que ya tienes la información del profesor disponible después de iniciar sesión
        // Puedes asignarla directamente a professorData
        this.professorData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
        };
    },
};
</script>

<style scoped>
/* Estilos para el componente */
</style>