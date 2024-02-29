<template>
  
    <NavBarComponent  />
    <div>
    <h1>Actualizaciones de Facebook</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <div>{{ post.message }}</div>
        <div>{{ post.created_time }}</div>
      </li>
    </ul>
  </div>

    
  
</template>

<script>
import NavBarComponent from './NavBarComponent.vue';
import axios from 'axios';

export default {
  components: {
    NavBarComponent,
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getFacebookPosts();
  },
  methods: {
    async getFacebookPosts() {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/{tu_id_de_pagina}/posts?access_token={tu_token_de_acceso}`
        );
        this.posts = response.data.data;
      } catch (error) {
        console.error('Error al obtener las actualizaciones de Facebook:', error);
      }
    }

  }

  
};
</script>

<style>
/* Estilos específicos para el modo oscuro */
.modo-oscuro {
  background-color: #1a202c;
  color: #cbd5e0;
}
</style>
