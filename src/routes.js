import Home from "./pages/Home";
import ThemeSelection from "./pages/ThemeSelection";
import * as routeNames from './utilities/constants/routeNames';

const routes = [
    {
        exact: true,
        path: routeNames.HOME,
        component: Home
    },
    {
        exact: true,
        path: routeNames.THEME_SELECTION,
        component: ThemeSelection
    }
]

export default routes;