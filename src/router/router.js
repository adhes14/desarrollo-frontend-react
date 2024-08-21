import { createBrowserRouter } from "react-router-dom";
import Default from "../screens/Default/Default";
import Product from "../screens/Product/Product";

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
      }
    ],
  }
]);

export default router;