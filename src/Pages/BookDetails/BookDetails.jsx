import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  const { image, description, name, author } = book;

  // const handleBorrow = () => {
  //   fetch('')
  // }
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="min-h-[60vh] lg:w-1/4 bg-custom-main2 flex items-center justify-center">
          <div>
            <img className="" src={image} alt="" />
          </div>
        </div>
        <div className="min-h-[70vh] lg:w-3/4">
          <div className="h-full bg-custom-main text-center flex items-center">
            <div className="mb-10 mt-7 lg:mb-0 lg:mt-0">
              <h1 className="text-custom-main2 text-5xl font-extrabold">
                Over View
              </h1>
              <p className="mt-4 w-2/3 mx-auto text-justify text-base text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-custom-main px-4 mb-10 lg:mb-0">
        <h2 className="text-3xl  font-bold">{name}</h2>
        <p className="text-xl text-right">by -- {author}</p>
      </div>
      <div className="px-4">
        <button className="bg-white btn border-2 border-custom-main hover:bg-custom-main  text-custom-main hover:text-white mr-2">
          Read More
        </button>
        <button
          // onClick={handleBorrow}
          className="bg-white btn border-2 border-custom-main hover:bg-custom-main text-custom-main hover:text-white"
        >
          Borrow
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
