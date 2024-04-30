import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import UploadProduct from "../pages/UploadProduct/UploadProduct";
import axios from "axios";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import MyList from "../pages/MyList/MyList";
import ContactUs from "../pages/ContactUs/ContactUs";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";


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
        element: <About/>,
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
        path: "/mylist",
        element: <MyList/>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
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
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile/>,
      }
    ],
  },
]);
export default router;
