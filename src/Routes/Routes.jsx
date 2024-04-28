import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import UploadProduct from "../pages/UploadProduct/UploadProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<Home/>,
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
        path: "/signIn",
        element: <h1>SignIn</h1>,
      },
      {
        path: "/singleProduct",
        element: <SingleProduct/>,
      },
      {
        path: "/uploadProduct",
        element: <UploadProduct/>,
      }
    ]
  }
])

export default router;