import Category from "../BookCategory/Category";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Category></Category>
    </div>
  );
};

export default Home;
