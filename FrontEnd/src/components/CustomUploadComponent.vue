<template>
    <div>
        <NavBarComponent />
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div class="max-w-lg w-full p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 class="text-3xl font-semibold mb-6">Subir Constancias para Validar</h2>
                <div class="mb-6">
                    <label for="fileInput" class="block text-lg font-medium mb-2">Seleccionar Archivo:</label>
                    <input type="file" id="fileInput" class="w-full bg-gray-700 px-4 py-2 rounded-lg focus:outline-none"
                        @change="handleFileUpload">
                </div>
                <button
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg focus:outline-none"
                    @click="uploadFile" :disabled="!selectedFile">
                    Subir Archivo
                </button>
                <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
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
            selectedFile: null,
            errorMessage: '',
        };
    },
    methods: {
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },
        uploadFile() {
            if (this.selectedFile) {
                // Aquí puedes agregar lógica para subir el archivo
                console.log('Subir archivo:', this.selectedFile);
                // Aquí puedes llamar a una función de tu backend para subir el archivo
            } else {
                this.errorMessage = 'Por favor selecciona un archivo.';
            }
        },
    },
};
</script>

<style scoped>
/* Estilos para el componente */
</style>