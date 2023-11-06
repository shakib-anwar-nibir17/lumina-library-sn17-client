import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CommonBookCard from "../../Shared/CommonBookCard/CommonBookCard";

const CategoryDetails = () => {
  const [books, setBooks] = useState([]);
  const category = useLoaderData();
  const { category_name } = category;
  useEffect(() => {
    fetch(`http://localhost:5000/books/category/${category_name}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [category_name]);
  return (
    <div>
      <h1 className="text-2xl mt-10 lg:text-5xl text-center text-custom-main font-bold">
        {category_name} Collection
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {books.map((book) => (
          <CommonBookCard key={book._id} book={book}></CommonBookCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
