import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'
import router  from './router'


const app = createApp(App)
app.use(router)

app.use(vue3GoogleLogin, {
  clientId: '897276465364-62fqb5bdpo6qagaqsk6nmrdl1m223203.apps.googleusercontent.com'
})

app.mount('#app')
