import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(VueLazyload)

app.mount('#app')
