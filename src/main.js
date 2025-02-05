import { createApp, reactive } from 'vue'
import App from './App.vue'

const app = createApp(App)

//전역변수
app.config.globalProperties.contentHtml = reactive(window.contentHtml);
app.config.globalProperties.page = reactive(window.page);
//반응형 필요없음
app.config.globalProperties.session = window.session;
app.config.globalProperties.CONFIG = window.CONFIG;

app.mount('#viteprovider')
