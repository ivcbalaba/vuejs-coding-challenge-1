import { createRouter, createWebHistory } from "vue-router";
import CardList from "../views/CardList.vue";
import CardDetails from "../views/CardDetails.vue";
import AddCardForm from "../views/AddCardForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/cards/new",
    },
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
      path: "/cards/:id",
      name: "CardDetails",
      component: CardDetails,
      props: true,
    },
  ],
});

export default router;
