import {RouterProvider} from "react-router";
import {routes} from "./routes/routes.tsx";

export default function App () {
    return (
        <RouterProvider router={routes}/>
    )
}