import PropTypes from "prop-types";

import { Rating, Star } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const customStyles = {
  itemShapes: Star,
  activeFillColor: "#ed7966",
  inactiveFillColor: "#fae5df",
};

const BookCard = ({ book }) => {
  const { _id, image, name, author, rating, category } = book;
  return (
    <div>
      <div className="card card-compact border-2 border-custom-main mx-4">
        <div>
          <img
            className="h-[350px] w-[180px] mx-auto lg:w-[230px] mt-8"
            src={image}
            alt={name}
          />
        </div>

        <div className="card-body">
          <h2 className="card-title h-[56px] text-custom-main">{name}</h2>
          <div className="badge badge-info text-white">{category}</div>
          <p className="bold underline">{author}</p>
          <div>
            <Rating
              style={{ maxWidth: 120 }}
              value={rating}
              readOnly
              itemStyles={customStyles}
            />
          </div>
          <div className="card-actions">
            <Link to={`/update_book/${_id}`}>
              <button className="btn bg-custom-main text-white font-semibold mt-6 hover:bg-white hover:text-custom-main hover:border-2 hover:border-custom-main">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
