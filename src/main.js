import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Posts from './Posts.vue'
import Details from './Details.vue'

createApp(App).mount('#app')
createApp(Posts).mount('#posts')
createApp(Details).mount('#details')

