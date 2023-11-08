const BorrowedBooksCard = () => {
  return (
    <div className="mt-10">
      <div className="border-2 border-custom-main2 h-[300px] flex">
        <div className="w-1/2 lg:w-1/5 border-r-2 border-custom-main2 h-full">
          <img src="" alt="" />
        </div>
        <div className="w-1/2 lg:w-4/5 h-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 border-b-2 lg:border-r-2 lg:border-b-0 border-custom-main2 h-1/2 lg:h-full">
            <h2 className="pl-2 pt-2">Hellow</h2>
            <h2 className="pl-2 pt-2">Hellow</h2>
          </div>
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
            <div className="h-1/2 border-b-2 border-custom-main2">
              <h2 className="pl-2">Hellow</h2>
              <h2 className="pl-2">Hellow</h2>
            </div>
            <div className="flex h-1/2 justify-end items-end">
              <div className="py-2 pr-2">
                <button className="lg:btn btn-sm btn-success lg:btn-success">
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
