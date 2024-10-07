import { createRouter, createWebHistory } from "vue-router";

import MyHome from "./pages/MyHome.vue";
import MyProjects from "./pages/MyProjects.vue";
import MyCertificates from "./pages/MyCertificates.vue";
import ContactMe from "./pages/ContactMe.vue";

const routes = [
  { path: "/", component: MyHome },
  { path: "/my-projects", component: MyProjects },
  { path: "/my-certificates", component: MyCertificates },
  { path: "/contact-me", component: ContactMe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
