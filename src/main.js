import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'

import './main.css'

const app = createApp(App)
app.use(Notifications)
app.mount('#app')
