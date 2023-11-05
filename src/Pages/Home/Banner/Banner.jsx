import banner from "../../../assets/banner11.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  AOS.init();
  return (
    <div className="flex min-h-screen justify-center items-center bg-custom-light1 px-6">
      <div data-aos="fade-left" className="w-1/2">
        <h1 className="text-7xl font-bold text-custom-main2">
          Where Pages Come to Life
          <span className="text-custom-main ml-2">
            A Library Beyond Boundaries.
          </span>
        </h1>
        <button className="btn bg-custom-main text-white font-semibold mt-6">
          Browse Collection
        </button>
      </div>
      <div data-aos="fade-right" className="w-1/2">
        <img className="w-full" src={banner} alt="banner-pic" />
      </div>
    </div>
  );
};

export default Banner;
