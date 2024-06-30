import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'remixicon/fonts/remixicon.css'
import './style.css'
import './style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')