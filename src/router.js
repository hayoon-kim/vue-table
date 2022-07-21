import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./components/MainPage.vue";
import Login from "./components/Login.vue";
import Table from "./components/Table.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/table",
    component: Table,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 