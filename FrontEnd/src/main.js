import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import './index.css'
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import MainPage from './components/MainPage.vue';
import FaqComponent from './components/FaqComponent.vue';
import KardexComponent from './components/KardexComponent.vue';
import CustomUploadComponent from './components/CustomUploadComponent.vue';
import RequestReleaseProcessComponent from './components/RequestReleaseProcessComponent.vue';
import ConsultTutorComponent from './components/ConsultTutorComponent.vue';

const routes = [
    { path: '/', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/main', component: MainPage },
    { path: '/faq', component: FaqComponent },
    { path: '/kardex', component: KardexComponent },
    { path: '/request-release-process', component: RequestReleaseProcessComponent },
    { path: '/custom-upload', component: CustomUploadComponent },
    { path: '/consult-tutor', component: ConsultTutorComponent },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
