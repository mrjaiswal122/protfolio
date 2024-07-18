import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from "./pages/error-page";
import Admin from './pages/Admin';
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorPage/>
    },
    {
        path:'/add',
        element:<Admin/>
    }
    // {path:''}
]);

 export default router;