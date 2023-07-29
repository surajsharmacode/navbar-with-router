import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import RootLayout from "./pages/Root";
import ProductDetailPage from "./ProductDetail";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Product /> },
      { path: '/products/:productId',element: <ProductDetailPage/>,}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
