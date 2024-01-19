import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import V3ScrollLock from 'v3-scroll-lock';
import { createRouter, createWebHistory } from 'vue-router'

import './assets/css/style.css'

const app = createApp(App)
app.use(V3ScrollLock, {})
app.use(
  createRouter({
    history: createWebHistory(),
    routes
  })
)

app.mount('#app')
