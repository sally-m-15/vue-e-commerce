export const adminRoutes = [
    {
        path: "/admin",
        component: () => import("@/layout/AdminLayout.vue"),
        redirect: "{name: 'dashboard'}",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("@/pages/Admin/Dashboard.vue")
            },
            {
                path: "manage-products",
                name: "manage-products",
                component: () => import("@/pages/Admin/ManageProducts.vue")
            },
            {
                path: "customers",
                name: "customers",
                component: () => import("@/pages/Admin/Customers.vue")
            },
            {
                path: "orders",
                name: "orders",
                component: () => import("@/pages/Admin/Order.vue")
            }
        ]
    }
]