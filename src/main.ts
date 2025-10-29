import { createApp } from 'vue'
import './style.css'
import 'leaflet/dist/leaflet.css'
import 'vue-map-ui/dist/normalize.css'
import 'vue-map-ui/dist/style.css'
import 'vue-map-ui/dist/theme-all.css'
import App from './App.vue'
import {router} from "./router.ts";

createApp(App).use(router).mount('#app');
