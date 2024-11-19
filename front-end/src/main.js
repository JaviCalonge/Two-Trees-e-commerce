import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.mount("#app");
