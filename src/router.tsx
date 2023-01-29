import {createBrowserRouter} from "react-router-dom";
import IndexView from "./views/IndexView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexView />,
    },
]);

export default router;