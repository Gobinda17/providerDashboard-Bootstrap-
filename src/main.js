import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'remixicon/fonts/remixicon.css'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import apiClient from '../src/utils/apiClient'
import store from './views/store'


const token = localStorage.getItem('token')
if(token){
  apiClient.defaults.headers.common['Authorization'] = token
}


// manage error and expire token

apiClient.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        store.dispatch('logout')
        return router.push('/login')
    }
    else{
      store.commit('handle_error',JSON.parse(error.response.data.error));
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)

app.mount('#app')