import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  const { category_name, photo1 } = category;
  return (
    <div>
      <div>
        <img className="w-[250px] mx-auto" src={photo1} alt="" />
      </div>
      <div className=" text-custom-main font-bold flex flex-col items-center">
        <h2 className="text-2xl">{category_name}</h2>
        <button className="btn w-1/2  bg-custom-main text-white font-semibold  hover:bg-white hover:text-custom-main hover:border-2 hover:border-custom-main">
          Browse Collection
        </button>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};

export default CategoryCard;
