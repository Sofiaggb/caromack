import {
    // createBrowserRouter,
    createHashRouter,
    Outlet,
    ScrollRestoration
} from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home"
import { ProductPage } from "./pages/ProductPage";
import Error from "./pages/Error";
import FormProduct from "./pages/FormProduct";


const Layout = () => {
    return (
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    )
}

export const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader: ProductsData
            },
            {
                path: "/product/:id",
                element: <ProductPage />
            },
            
        ]
    },
    {
        path: "/form",
        element: <FormProduct />
    },
    {
        path: "*",
        element: <Error />, // Ruta para manejar 404
    },
], 
// {
//     basename: "/caromack",
// }
);