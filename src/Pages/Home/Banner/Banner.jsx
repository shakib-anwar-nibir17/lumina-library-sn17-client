import banner from "../../../assets/banner11.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  AOS.init();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-center items-center bg-custom-light1 px-6">
      <div data-aos="fade-left" className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl lg:text-7xl font-bold text-custom-main2">
          Where Pages Come to Life
          <span className="text-custom-main ml-2">
            A Library Beyond Boundaries.
          </span>
        </h1>
        <button className="btn bg-custom-main text-white font-semibold mt-6 hover:bg-white hover:text-custom-main hover:border-2 hover:border-custom-main">
          Browse Collection
        </button>
      </div>
      <div data-aos="fade-right" className="lg:w-1/2">
        <img className="w-full" src={banner} alt="banner-pic" />
      </div>
    </div>
  );
};

export default Banner;
