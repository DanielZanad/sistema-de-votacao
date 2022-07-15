import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import SectionSurvey from './components/SectionSurvey.vue';  

createApp(App).component('SectionSurvey', SectionSurvey).use(router).mount('#app')
