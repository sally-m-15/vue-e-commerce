export interface NavLink {
    name: string,
    routeName: string
};

export const navLinks: NavLink[] = [
    {name: 'home', routeName: 'home'},
    {name: 'cart', routeName: 'cart'},
    {name: 'wish list', routeName: 'wishList'},
    {name: 'products', routeName: 'products'},
    {name: 'categories', routeName: 'categories'},
    {name: 'brands', routeName: 'brands'}
]