import {createBrowserRouter} from "react-router-dom";
import PublicLayout from "../_layouts/public.tsx";
import SignIn from "../pages/public/sign-in.ts.tsx";
import UserRegister from "../pages/public/user-register.tsx";
import Dashboard from "../pages/private/dashboard.tsx";
import PrivateLayout from "../_layouts/private.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout/>,
        children: [
            {
                path: '/',
                element: <SignIn/>
            },
            {
                path: '/user-register',
                element: <UserRegister/>
            }
        ]
    },
    {
        path: '/',
        element: <PrivateLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    }
])