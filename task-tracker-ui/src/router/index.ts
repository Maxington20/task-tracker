import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    alias: '/home',
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("../views/TaskBoard.vue"),
  },
  // {
  //   path: "/tasks/:id",
  //   name: "Task",
  //   component: () => import("../views/Task.vue"),
  // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    });

export default router;