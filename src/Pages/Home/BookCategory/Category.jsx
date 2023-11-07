import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="mt-20">
        <h2 className="text-2xl lg:text-5xl text-center text-custom-main font-bold">
          Categories of Books
        </h2>
      </div>
      <div className="grid gap-5 lg:gap-0 grid-cols-1 lg:grid-cols-4 mt-10">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
