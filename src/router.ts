import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import ElectronicsView from "./components/Electronics.vue";
import ClothingView from "./components/Clothing.vue";
import GroceriesView from "./components/Groceries.vue";
import BestSellerView from "./components/BestSeller.vue";
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: '/clothing',
    name: 'Clothing',
    component: ClothingView,
  },
  {
    path: '/electronics',
    name: 'Electronics',
    component: ElectronicsView,
  },
  {
    path: '/groceries',
    name: 'Groceries',
    component: GroceriesView,
  },
  {
    path: '/bestseller',
    name: 'BestSeller',
    component: BestSellerView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
