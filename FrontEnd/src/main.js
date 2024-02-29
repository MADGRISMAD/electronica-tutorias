import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import './index.css'
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import MainPage from './components/MainPage.vue';
import FaqComponent from './components/FaqComponent.vue';

const routes = [
    { path: '/login',
    name: 'login',
    component: LoginComponent },
    { path: '/register',
    name:'register',
    component: RegisterComponent },
    { path: '/main',
    name:'main',
    component: MainPage },
    { path: '/faq',
    name: 'faq',
    component: FaqComponent },
    { path: '/',   
    redirect: '/login' }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
