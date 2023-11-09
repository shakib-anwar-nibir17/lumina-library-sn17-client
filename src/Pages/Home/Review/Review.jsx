import reviewer1 from "../../../assets/reviewer1.jpg";
import reviewer2 from "../../../assets/reviewer2.jpg";
import reviewer3 from "../../../assets/reviewer3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./css/style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="mt-20 mb-28">
      <h2 className="text-3xl  text-custom-main font-bold mb-16">
        User reviews
      </h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-custom-main2">
            <div className="flex justify-center">
              <div className="h-[70px] w-[70px] mx-6 mb-4 mt-2">
                <img
                  className="w-full h-full rounded-full"
                  src={reviewer1}
                  alt=""
                />
              </div>
            </div>
            <p>
              Lumina Library is a bookworm paradise! The vast collection covers
              a wide range of genres, from classic literature to the latest
              bestsellers. The user-friendly interface makes it easy to
              navigate, and I love the personalized recommendations based on my
              reading history. Thank you, Lumina Library for creating a platform
              what book lovers trust.
            </p>
            <h2 className="font-bold mt-10">BookLover42</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-custom-main2">
            <div className="flex justify-center">
              <div className="h-[70px] w-[70px] mx-6 mb-4 mt-2">
                <img
                  className="w-full h-full rounded-full"
                  src={reviewer2}
                  alt=""
                />
              </div>
            </div>
            <p>
              Lumina Library is a haven for novel enthusiasts like myself! The
              diverse and extensive collection of novels, ranging from timeless
              classics to contemporary gems, never ceases to amaze me. The
              immersive reading experience on the platform is unparalleled, and
              I appreciate the attention to detail in preserving the formatting
              of each novel.
            </p>
            <h2 className="font-bold mt-10">TechEnthusiast87</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-custom-main2">
            <div className="flex justify-center">
              <div className="h-[70px] w-[70px] mx-6 mb-4 mt-2">
                <img
                  className="w-full h-full rounded-full"
                  src={reviewer3}
                  alt=""
                />
              </div>
            </div>
            <p>
              Lumina Library has become my go-to resource for historical books
              and research materials. The curated collection of historical texts
              is impressive, and the platforms commitment to accuracy and
              authenticity is evident. The annotation feature has proven
              invaluable for my research projects, allowing me to highlight and
              save key passages.
            </p>
            <h2 className="font-bold mt-10">NovelAdventurer</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
