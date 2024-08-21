import { createBrowserRouter } from "react-router-dom";
import Default from "../screens/Default/Default";
import Product from "../screens/Product/Product";
import LoginForm from "../screens/Forms/LoginForm";

import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
]);

export default router;