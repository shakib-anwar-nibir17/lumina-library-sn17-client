import Category from "../BookCategory/Category";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Category></Category>
      <div className="px-4">
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
