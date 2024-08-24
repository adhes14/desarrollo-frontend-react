import { createBrowserRouter } from "react-router-dom";
import Default from "../screens/Default/Default";
import Product from "../screens/Product/Product";
import LoginForm from "../screens/Forms/LoginForm";
import LandingPage from "../screens/LandingPage/LandingPage";

import App from "../App";

const basename = process.env.NODE_ENV === "production" ? "/desarrollo-frontend-react" : "/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/default",
        element: <Default />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  }
], { basename });

export default router;