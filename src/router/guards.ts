import MainLayout from "@/layout/MainLayout.vue";

export const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "sign-in",
        component: () => import("@/pages/Auth/Login.vue"),
        meta: { requiresAuth: false },
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: () => import("@/pages/Auth/Register.vue"),
        meta: { requiresAuth: false },
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: () => import("@/pages/Auth/ResetPassword.vue"),
        meta: { requiresAuth: false },
      },
      {
        path: "home",
        name: "home",
        component: () => import("@/pages/Shopping/Home.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "productDetails/:id",
        name: "productDetails",
        meta: { requiresAuth: true },
        component: () => import("@/components/home/ProductDetails.vue"),
      },
      {
        path: "wishList",
        name: "wishList",
        meta: { requiresAuth: true },
        component: () => import("@/pages/Shopping/wishlist.vue"),
      },
      {
        path: "cart",
        name: "cart",
        meta: { requiresAuth: true },
        component: () => import("@/pages/Shopping/Cart.vue"),
      },
      {
        path: "checkout",
        name: "checkout",
        meta: { requiresAuth: true },
        component: () => import("@/pages/checkOut/Checkout.vue"),
      },
      {
        path: "products",
        name: "products",
        meta: { requiresAuth: true },
        component: () => import("@/pages/Shopping/Products.vue"),
      },
      {
        path: "categories",
        name: "categories",
        meta: { requiresAuth: true },
        component: () => import("@/pages/Shopping/Categories.vue"),
        children: [
          {
            path: "categoriecard",
            name: "categoriecard",
            meta: { requiresAuth: true },
            component: () => import("@/components/CategorieCard.vue"),
          },
        ],
      },
      {
        path: "brands",
        name: "brands",
        meta: { requiresAuth: true },
        component: () => import("@/pages/Shopping/Brands.vue"),
      },
    ],
  },

  {
    path: "/allorder",
    name: "allorder",
    meta: { requiresAuth: true },
    component: () => import("@components/AllOrders.vue"),
  },
  {
    path: "/:notFound(.*)*",
    name: "notfound",
    meta: { requiresAuth: true },
    component: () => import("@/pages/notFound/NotFound.vue"),
  },
  {
    path: "/file-notfound",
    name: "file-notfound",
    meta: { requiresAuth: true },
    component: () => import("@/pages/notFound/FileNotFound.vue"),
  },
];
