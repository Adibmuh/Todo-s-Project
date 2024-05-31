import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import TodoPage from "../pages/TodoPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/todo",
        name: "Todo",
        component: TodoPage,
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
