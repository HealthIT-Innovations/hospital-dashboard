import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";


// element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ElementPlus)
appInstance.use(SoftUIDashboard);
appInstance.use(vuetify);
appInstance.mount("#app");