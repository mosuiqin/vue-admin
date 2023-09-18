import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from './assets/locale/cn.js'
import App from './App.vue'
import router from './router'
import './assets/main.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(locale)
app.mount('#app')