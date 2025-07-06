import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../homepage/Home";
import AddBook from "../addbookpage/AddBook";
import AllBooksPage from "../allbookspage/AllBooksPage";
import ViewDetails from "../viewdetailspage/ViewDetails";
import EditBookDetails from "../editbookpage/EditBookDetails";
import BorrowSummary from "../borrowsummarypage/BorrowSummary";
import Borrow from "../borrowbookpage/Borrow";

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
          path: "/create-book",
          element: <AddBook />,
        },
        {
          path: "/books",
          element: <AllBooksPage />,
        },
        {
          path: "/books/:id",
          element: <ViewDetails />,
        },
        // {
        //   path: "/edit-book/:id",
        //   element: <EditBookDetails />,
        // },
        {
          path: "/borrow-summary",
          element: <BorrowSummary />,
        },
        {
          path: "/borrow/:bookId",
          element: <Borrow />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AllRoutes;
