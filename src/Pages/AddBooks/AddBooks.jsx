import FormControl from "./FormControl";

const AddBooks = () => {
  return (
    <div>
      <h2 className="text-2xl lg:text-5xl text-center text-custom-main font-bold mt-10">
        Add Data of Books
      </h2>
      <div className="lg:w-3/4 mx-auto px-6">
        <FormControl></FormControl>
      </div>
    </div>
  );
};

export default AddBooks;
