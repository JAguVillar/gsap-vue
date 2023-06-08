const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/basico",
    component: () => import("layouts/MainLayout.vue"),
    name: "basico",
    children: [
      { path: "", component: () => import("pages/basico/indexBasico.vue") },
    ],
  },
  {
    path: "/anim",
    component: () => import("layouts/MainLayout.vue"),
    name: "anim",
    children: [
      { path: "", component: () => import("pages/anim/indexAnim.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
