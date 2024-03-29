import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import Vant from "vant"
import 'vant/lib/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/style.css'

const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(ElementPlus)
 
app.mount('#app')

