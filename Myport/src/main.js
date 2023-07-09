
import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/js/all'



createApp(App).mount('#app')
new Vue({  router,  store,  render: h => h(App),}).$mount('#app')
