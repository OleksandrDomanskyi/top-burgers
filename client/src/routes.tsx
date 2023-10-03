import AdminPage from "./pages/AdminPage"
import AuthorizationPage from "./pages/AuthorizationPage"
import BasketPage from "./pages/BasketPage"
import ItemPage from "./pages/ItemPage"
import ShopPage from "./pages/ShopPage"
import { ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/enums/routeNames"

export const privateRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: ShopPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthorizationPage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthorizationPage
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },
]