import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const book = useLoaderData();
  const { _id, image, author, rating, name, category, quantity } = book;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const image = form.image.value;

    const updatedBook = {
      image,
      author,
      rating,
      name,
      category,
      quantity,
    };

    axios
      .put(`http://localhost:5000/books/${_id}`, updatedBook, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Book Data Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              defaultValue={name}
              placeholder="Book name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              name="author"
              defaultValue={author}
              placeholder="Author name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Amount</span>
            </label>
            <input
              name="quantity"
              defaultValue={quantity}
              placeholder="Quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Image</span>
            </label>
            <input
              name="image"
              defaultValue={image}
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Rating (1-5)</span>
            </label>
            <input
              name="rating"
              defaultValue={rating}
              placeholder="Rating"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              defaultValue={category}
              required
              className="select select-bordered"
            >
              <option value="">Select...</option>
              <option>Drama</option>
              <option>History</option>
              <option>Thriller</option>
              <option>Novel</option>
            </select>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-custom-main text-white font-semibold hover:bg-white hover:text-custom-main hover:border-2 hover:border-custom-main">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
