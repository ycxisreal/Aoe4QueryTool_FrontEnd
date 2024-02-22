// import './assets/main.css'

import { createApp } from 'vue'
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(Elementplus)
app.use(router)

app.mount('#app')
