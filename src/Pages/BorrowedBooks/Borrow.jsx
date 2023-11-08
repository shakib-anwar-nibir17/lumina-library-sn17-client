import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import BorrowedBooksCard from "./BorrowedBooksCard";

const Borrow = () => {
  const { user } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/borrowed_books?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBorrowedBooks(data));
  }, [user.email]);

  return (
    <div className="mt-10">
      <h1 className="text-2xl mt-10 lg:text-5xl text-center text-custom-main font-bold">
        My Collection
      </h1>
      <div>
        {borrowedBooks.map((book) => (
          <BorrowedBooksCard
            key={book._id}
            book={book}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
          ></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default Borrow;
