import './main.js'
import "./style.css"
import 'primeicons/primeicons.css';
import { createApp } from 'vue'
import store from './store'
import "@fortawesome/fontawesome-free/css/all.min.css";

import 'primevue/resources/primevue.min.css'
import "primeicons/primeicons.css"

import PrimeVue from "primevue/config";
import Avatar from 'primevue/avatar';

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(store)
app.use(PrimeVue)
app.component('Avatar',Avatar)
app.use(router)
app.mount('#app')