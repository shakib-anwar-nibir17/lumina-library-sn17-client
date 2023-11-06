import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllBooks from "../Pages/AllBooks/AllBooks";
import CategoryDetails from "../Pages/Home/BookCategory/CategoryDetails";
import BookDetails from "../Pages/BookDetails/BookDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/books_details/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/books",
        element: <AllBooks></AllBooks>,
        loader: () => fetch("http://localhost:5000/books"),
      },
    ],
  },
]);

export default routes;
