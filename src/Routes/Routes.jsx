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
import UpdateBookLayout from "../Pages/UpdateBook/UpdateBookLayout";
import ReadPage from "../Pages/ReadPage/ReadPage";
import Borrow from "../Pages/BorrowedBooks/Borrow";

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
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
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
        path: "/register",
        element: <Register></Register>,
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
        path: "/books_details/read/:id",
        element: (
          <PrivateRoute>
            <ReadPage></ReadPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/books", //all books navLink
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("http://localhost:5000/books", { credentials: "include" }),
      },
      {
        path: "/update_book/:id",
        element: (
          <PrivateRoute>
            <UpdateBookLayout></UpdateBookLayout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/borrowed_books", //Borrowed Books navLink
        element: (
          <PrivateRoute>
            <Borrow></Borrow>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
