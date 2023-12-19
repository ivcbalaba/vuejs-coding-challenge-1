import { createRouter, createWebHistory } from "vue-router";
import CardList from "../views/CardList.vue";
import CardDetails from "../views/CardDetails.vue";
import AddCardForm from "../views/AddCardForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/cards/new",
      name: "AddCard",
      component: AddCardForm,
    },
    {
      path: "/cards",
      name: "CardList",
      component: CardList,
    },
    {
      path: "/cards/:cardNumber",
      name: "CardDetails",
      component: CardDetails,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/cards/new",
    },
  ],
});

export default router;
