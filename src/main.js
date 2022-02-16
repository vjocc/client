import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const emitter = mitt()

let app

app = createApp(App)

app.config.globalProperties.emitter = emitter

app.use(router)
app.mount('#app')
