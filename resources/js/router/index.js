import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Boards from "../views/Boards.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/boards", name: "boards", component: Boards },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
