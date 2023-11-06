import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const AllBooks = () => {
  const books = useLoaderData();

  return (
    <div>
      <h1 className="text-2xl mt-10 lg:text-5xl text-center text-custom-main font-bold">
        Our Book Collection
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
