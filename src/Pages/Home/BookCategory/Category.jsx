import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../../../public/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="mt-20">
        <h2 className="text-5xl text-center text-custom-main font-bold">
          Our Book Collection By Category
        </h2>
      </div>
      <div className="grid grid-cols-4 mt-10">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
