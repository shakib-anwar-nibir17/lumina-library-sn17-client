import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";

const FormControl = () => {
  const defaultValues = {
    read: {
      photo1: "https://i.ibb.co/3yz8nFy/Reading-glasses-cuate.png",
    },
  };

  const { register, handleSubmit, control } = useForm();

  const [data, setData] = useState("");
  console.log(data);

  const addBooks = (data) => {
    setData(data);

    fetch("https://book-store-server-puce.vercel.app/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Task successful",
            text: "Product has been updated",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(addBooks)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
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
                {...register("author")}
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
                {...register("quantity")}
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
                {...register("image")}
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
                {...register("rating")}
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
                className="select select-bordered"
                {...register("category", { required: true })}
              >
                <option value="">Select...</option>
                <option>Drama</option>
                <option>History</option>
                <option>Thriller</option>
                <option>Novel</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Description</span>
            </label>
            <textarea
              {...register("description")}
              placeholder="Book Overview"
              className="input input-bordered pt-4 h-[100px]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text text-custom-main">
                Read(Pages of Books for preview)
              </span>
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Controller
                name="read.photo1"
                control={control}
                defaultValue={defaultValues.read.photo1}
                render={({ field }) => (
                  <input
                    className="input input-bordered mt-2"
                    {...field}
                    placeholder="Photo 1 URL"
                  />
                )}
              />
              <Controller
                name="read.photo2"
                control={control}
                defaultValue={defaultValues.read.photo1}
                render={({ field }) => (
                  <input
                    {...field}
                    className="input input-bordered mt-2"
                    placeholder="Photo 2 URL"
                  />
                )}
              />

              <Controller
                name="read.photo3"
                control={control}
                defaultValue={defaultValues.read.photo1}
                render={({ field }) => (
                  <input
                    {...field}
                    className="input input-bordered mt-2"
                    placeholder="Photo 3 URL"
                  />
                )}
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-custom-main text-white font-semibold hover:bg-white hover:text-custom-main hover:border-2 hover:border-custom-main">
              Add Books
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormControl;
