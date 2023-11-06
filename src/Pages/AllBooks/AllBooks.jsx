import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

const AllBooks = () => {
  const books = useLoaderData();
  const [allBooks, setAllBooks] = useState(books);

  const handleFilter = () => {
    const booksAvailable = books.filter((book) => book.quantity > 0);
    setAllBooks(booksAvailable);
  };
  const handleReset = () => {
    setAllBooks(books);
  };

  return (
    <div>
      <h1 className="text-2xl mt-10 lg:text-5xl text-center text-custom-main font-bold">
        Our Book Collection
      </h1>
      <div className="flex gap-4 mt-6">
        <div className="flex font-bold text-2xl">
          <button onClick={() => handleFilter()}>
            <FaFilter className="text-custom-main"></FaFilter>
          </button>
          <h2>Available Books</h2>
        </div>
        <div className="flex font-bold text-2xl">
          <button onClick={() => handleReset()}>
            <RxReset className="text-custom-main text-3xl"></RxReset>
          </button>
          <h2>Revert</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {allBooks.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
