import { createRouter, createWebHashHistory} from "vue-router";
import Home from '@/views/view-home.vue';
import Connection from '@/views/view-connection.vue';
import Registration from '@/views/view-registration.vue';

const routes = [
    { name: "view-home" ,path: "/", component: Home},
    { name: "view-connection" ,path: "/About", component: Connection},
    { name: "view-registration" ,path: "/Form", component: Registration }
];
  
  const router = createRouter({
    history: createWebHashHistory(), 
    routes,
});

export default router;