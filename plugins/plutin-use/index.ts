import { createApp, nextTick } from 'vue'
import App from './hello.vue';

const root = document.createElement('div')

const app = createApp(App)

app.mount(root)

nextTick(() => {
  document.body.appendChild(root)
  console.log(root)
})