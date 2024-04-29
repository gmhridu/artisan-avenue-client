import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import UploadProduct from "../pages/UploadProduct/UploadProduct";
import axios from "axios";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const response = await axios.get("http://localhost:5000/products");
            const data = response.data;
            return data;
          } catch (error) {
            console.error("Error fetching products:", error);
            return [];
          }
        },
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/services",
        element: <h1>Services</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/singleProduct/:id",
        element: <SingleProduct />,
        loader: async ({ params }) => {
          try {
            const response = await axios.get(
              `http://localhost:5000/products/${params.id}`
            );
            const data = response.data;
            return data;
          } catch (error) {
            console.error("Error fetching product:", error);
            return null;
          }
        },
      },
      {
        path: "/uploadProduct",
        element: <UploadProduct />,
      },
     {
        path: "/signIn",
        element: <SignIn/>,
      },
      {
        path: '/signup',
        element: <Register/>,
     }
    ],
  },
]);
export default router;
