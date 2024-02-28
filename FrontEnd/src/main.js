import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import './index.css'
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/ResgisterComponent.vue';
import MainPage from './components/MainPage.vue';
import FaqComponent from './components/FaqComponent.vue';

const routes = [
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/faq', component: FaqComponent },
    { path: '/', component: MainPage }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
