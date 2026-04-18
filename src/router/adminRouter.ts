export const adminRoutes = [
    {
        path: "/admin",
        component: () => import("@/layout/AdminLayout.vue"),
        redirect: {name: 'dashboard'},
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("@/pages/Admin/Dashboard.vue")
            },
            {
                path: 'statistics',
                name: 'statistics',
                component: () => import("@/pages/Admin/Statistics.vue")
            },
            {
                path: 'payments',
                name: 'payments',
                component: () => import("@/pages/Admin/Payments.vue")

            },
            {
                path: 'transactions',
                name: 'transactions',
                component: () => import("@/pages/Admin/Transactions.vue")
            },
            {
                path: "products",
                name: "products",
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
            },
            {
                path: "messages",
                name: "messages",
                component: () => import("@/pages/Admin/Messages.vue")
            },
            {
                path: "settings",
                name: "settings",
                component: () => import("@/pages/Admin/Settings.vue")
            }
        ]
    }
]