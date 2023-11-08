import { Link, useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar2Date } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";
import useDate from "../../Hooks/useDate";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [bookQuantity, setBookQuantity] = useState(undefined);
  const book = useLoaderData();
  const { _id, image, description, name, author, quantity } = book;
  const borrow_date = useDate();

  const amount = parseInt(quantity);

  const formattedDate = new Intl.DateTimeFormat({
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(startDate);

  const handleModal = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const handleBorrow = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.user.value;
    const email = form.email.value;
    const book_id = _id;
    const return_date = formattedDate;

    const newEntry = {
      user,
      email,
      book_id,
      return_date,
      borrow_date,
      image,
      name,
      author,
    };
    console.log(newEntry);
    fetch("http://localhost:5000/borrowed_books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Task successful",
            text: "Book has been added to Your Collection",
          });
        }
      });

    const newQuantity = amount - 1;
    const validAmount = newQuantity < 0 ? 0 : newQuantity;

    setBookQuantity(validAmount);

    fetch(`http://localhost:5000/books/${_id}`, {
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
    document.getElementById("my_modal_5").close();
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="min-h-[60vh] lg:w-1/4 bg-custom-main2 flex items-center justify-center">
          <div>
            <img className="" src={image} alt="" />
          </div>
        </div>
        <div className="min-h-[70vh] lg:w-3/4">
          <div className="h-full bg-custom-main text-center flex items-center">
            <div className="mb-10 mt-7 lg:mb-0 lg:mt-0">
              <h1 className="text-custom-main2 text-5xl font-extrabold">
                Over View
              </h1>
              <p className="mt-4 w-2/3 mx-auto text-justify text-base text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-custom-main px-4 mb-10 lg:mb-0">
        <h2 className="text-3xl  font-bold">{name}</h2>
        <p className="text-xl text-right">by -- {author}</p>
      </div>
      <div className="mt-10 mb-10 px-4">
        <h2 className="text-2xl font-bold">
          Book Copy Available:
          {/* <span className="text-custom-main">{quantity}</span> */}
          <span className="ml-2">
            <input
              value={bookQuantity >= 0 ? bookQuantity : amount}
              className="w-[60px]"
              type="number"
              readOnly
            />
          </span>
        </h2>
      </div>
      <div className="px-4">
        <Link to={`/books_details/read/${_id}`}>
          <button className="bg-white btn border-2 border-custom-main hover:bg-custom-main  text-custom-main hover:text-white mr-2">
            Read More
          </button>
        </Link>
        <button
          onClick={handleModal}
          disabled={amount <= 0 || bookQuantity <= 0}
          className="bg-white btn border-2 border-custom-main hover:bg-custom-main text-custom-main hover:text-white"
        >
          Borrow
        </button>
      </div>
      <div>
        <dialog
          id="my_modal_5"
          className="modal px-4 modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-center text-custom-main text-lg underline">
              Please Fill Up
            </h3>
            <div>
              <form onSubmit={handleBorrow} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    name="user"
                    placeholder="Your Name"
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={user.email}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Return Date</span>
                  </label>
                  <div className="flex items-center">
                    <DatePicker
                      className="input input-bordered"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      minDate={new Date()}
                    />
                    <BsCalendar2Date className="ml-2 text-4xl"></BsCalendar2Date>
                  </div>
                </div>
                <button className="bg-white btn border-2 border-custom-main hover:bg-custom-main  text-custom-main hover:text-white mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BookDetails;
