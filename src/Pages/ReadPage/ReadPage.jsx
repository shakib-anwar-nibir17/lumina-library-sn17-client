import { useLoaderData } from "react-router-dom";

const ReadPage = () => {
  const book = useLoaderData();
  const { read } = book;
  return (
    <div className="grid grid-cols-1 gap-4  lg:grid-cols-3 mt-10 px-4">
      <div>
        <img
          className="border-4 border-custom-main2 min-h-[710px]"
          src={read.photo1}
          alt=""
        />
      </div>
      <div>
        <img
          className="border-4 border-custom-main2 min-h-[710px]"
          src={read.photo2}
          alt=""
        />
      </div>
      <div>
        <img
          className="border-4 border-custom-main2 min-h-[710px]"
          src={read.photo3}
          alt=""
        />
      </div>
    </div>
  );
};

export default ReadPage;
