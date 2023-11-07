import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllBooks from "../Pages/AllBooks/AllBooks";
import CategoryDetails from "../Pages/Home/BookCategory/CategoryDetails";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddBooks from "../Pages/AddBooks/AddBooks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/", //home navLink
        element: <Home></Home>,
      },
      {
        path: "/add_books", //Add Books navLink
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CategoryDetails></CategoryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/login", //login navLink
        element: <Login></Login>,
      },
      {
        path: "/books_details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/books", //all books navLink
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/books"),
      },
    ],
  },
]);

export default routes;
