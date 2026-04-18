import type { NavLink } from "@/types/userInterface";

export const adminNavLinks: NavLink[] = [
    {name: 'Dashboard', routeName: 'dashboard', icon: 'fa-columns'},
    {name: "Statistics", routeName: 'statistics', icon: 'fa-chart-bar'},
    {name: 'Payments', routeName: 'payments', icon:'fa-money-bill'},
    {name: 'Transactions', routeName: 'transactions', icon: 'fa-exchange-alt'},
    {name: 'Products', routeName: 'products', icon: 'fa-box-open'},
    {name: 'customers', routeName: 'customers', icon: 'fa-users'},
    {name: 'orders', routeName: 'orders', icon: 'fa-shopping-cart'},
    {name: 'messages', routeName: 'messages', icon: 'fa-comments'},
]