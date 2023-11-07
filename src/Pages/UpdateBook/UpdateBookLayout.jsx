import UpdateBook from "./UpdateBook";

const UpdateBookLayout = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl lg:text-5xl text-center text-custom-main font-bold mt-10">
          Update Book Data
        </h2>
        <div className="lg:w-3/4 mx-auto px-6">
          <UpdateBook></UpdateBook>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookLayout;
