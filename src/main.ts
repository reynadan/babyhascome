import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as globalConfig from './config/globalConfig.js'; 

const app = createApp(App);

// Add global configs keys to app
Object.keys(globalConfig).forEach((key) => {
  app.config.globalProperties[`$${key}`] = globalConfig[key];
});

app.mount('#app');