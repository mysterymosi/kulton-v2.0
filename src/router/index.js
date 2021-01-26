import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/investment-packages",
    name: "InvestmentPackages",
    component: () =>
      import(/* webpackChunkName: "investment" */ "../views/InvestmentPackages.vue")
  },
  {
    path: "/testimonies",
    name: "Testimonies",
    component: () =>
      import(/* webpackChunkName: "testimonies" */ "../views/Testimonies.vue")
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: () =>
      import(/* webpackChunkName: "faqs" */ "../views/Faqs.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
