import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../homepage/Home";
import AddBook from "../addbookpage/AddBook";

const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add-book",
          element: <AddBook />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AllRoutes;
