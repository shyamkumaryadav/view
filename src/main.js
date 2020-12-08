import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import '@mdi/font/css/materialdesignicons.min.css'
import store from './store'

const app = createApp({
    render: h => h(App)
}).use(store).use(router)

new WaveUI(app, {
    // Some Wave UI options.
})

app.mount('#app')
