import {
    createBrowserRouter,
    Outlet,
    ScrollRestoration
} from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home"
import { ProductPage } from "./pages/ProductPage";


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

export const router = createBrowserRouter([
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
        //     {
        //         path: "/cart",
        //         element: <Cart />
        //     },
        ]
    }
]);