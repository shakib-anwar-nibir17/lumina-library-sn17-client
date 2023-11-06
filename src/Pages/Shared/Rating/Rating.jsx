import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const rating = () => {
  return (
    <div>
      <Rating style={{ maxWidth: 180 }} readOnly />
    </div>
  );
};

export default rating;
