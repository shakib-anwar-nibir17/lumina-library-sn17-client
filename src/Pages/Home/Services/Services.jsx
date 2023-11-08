import service1 from "../../../assets/service1.png";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import service4 from "../../../assets/service4.png";

const Services = () => {
  return (
    <div className="mt-20">
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-center text-custom-main font-bold mb-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-custom-main text-2xl md:text-4xl">
              24/7 support
            </h2>
          </div>
          <div>
            <img
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
              src={service1}
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-custom-main text-2xl md:text-4xl">
              Home Delivery
            </h2>
          </div>
          <div>
            <img
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
              src={service2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-custom-main text-2xl md:text-4xl">
              No Limits on Return
            </h2>
          </div>
          <div>
            <img
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
              src={service3}
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-custom-main text-2xl md:text-4xl">
              Customer Reward Program
            </h2>
          </div>
          <div>
            <img
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
              src={service4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
