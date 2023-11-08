import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BorrowedBooksCard = ({ book, borrowedBooks, setBorrowedBooks }) => {
  const [newBook, setNewBook] = useState([]);
  const { _id, book_id, return_date, borrow_date, image, name, author } = book;
  const { quantity } = newBook;

  useEffect(() => {
    fetch(`http://localhost:5000/books/${book_id}`)
      .then((res) => res.json())
      .then((data) => setNewBook(data));
  }, [book_id]);

  const bookAmount = parseInt(quantity);

  const handleReturn = (id) => {
    console.log(id);
    Swal.fire({
      title: "Ready to Return!!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/borrowed_books/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Returned", "The Book has been Returned.", "success");
            }
            const remaining = borrowedBooks.filter((item) => item._id !== id);
            setBorrowedBooks(remaining);
          });
      }

      const newQuantity = bookAmount + 1;
      const validAmount = newQuantity < 0 ? 0 : newQuantity;

      fetch(`http://localhost:5000/books/${book_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ quantity: validAmount }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  };
  return (
    <div className="mt-10 px-4">
      <div className="border-2 border-custom-main2 h-[300px] flex  text-custom-main text-sm lg:text-2xl">
        <div className="w-1/2 lg:w-1/5 border-r-2 border-custom-main2 h-full">
          <img
            className="w-1/2 mt-6 lg:mt-0 lg:w-3/4 lg:h-full h-3/4 mx-auto py-4"
            src={image}
            alt=""
          />
        </div>
        <div className="w-1/2 lg:w-4/5 h-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 border-b-2 lg:border-r-2 lg:border-b-0 border-custom-main2 h-1/2 lg:h-full">
            <h2 className="pl-2 pt-2">
              Book Name: <span className="text-blue-700 ml-2">{name}</span>
            </h2>
            <h2 className="pl-2 pt-2">
              Author: <span className="text-blue-700 ml-2">{author}</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
            <div className="h-1/2 border-b-2 border-custom-main2">
              <h2 className="pl-2">
                Borrow Date:
                <span className="text-blue-700 ml-2">{borrow_date}</span>
              </h2>
              <h2 className="pl-2">
                Return Date:
                <span className="text-blue-700 ml-2">{return_date}</span>
              </h2>
            </div>
            <div className="flex h-1/2 justify-end items-end">
              <div className="py-2 pr-2">
                <button
                  onClick={() => handleReturn(_id)}
                  className="lg:btn btn-sm btn-success lg:btn-success"
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BorrowedBooksCard.propTypes = {
  book: PropTypes.object,
  borrowedBooks: PropTypes.array,
  setBorrowedBooks: PropTypes.func,
};

export default BorrowedBooksCard;
