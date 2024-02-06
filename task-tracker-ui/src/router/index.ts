import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("../views/Tasks.vue"),
  },
  {
    path: "/tasks/:id",
    name: "Task",
    component: () => import("../views/Task.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    });

export default router;