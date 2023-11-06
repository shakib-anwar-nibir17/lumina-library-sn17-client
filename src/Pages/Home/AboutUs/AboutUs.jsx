import pic from "../../../assets/about-us.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2">
        <img className="w-full" src={pic} alt="" />
      </div>
      <div className="lg:w-1/2 px-4">
        <h1 className="text-5xl text-center text-custom-main font-bold">
          About Us
        </h1>
        <p className="text-justify text-xl mt-4">
          Library Lumina is a cutting-edge library management system,
          revolutionizing the way libraries operate. With its user-friendly
          interface, Library Lumina ensures that both library staff and patrons
          can effortlessly navigate its features, enhancing accessibility. This
          system streamlines cataloging, simplifying resource organization and
          retrieval. Its powerful search capabilities enable users to quickly
          find materials, saving time and improving the overall library
          experience. Library Lumina analytics and reporting tools provide
          valuable insights into usage trends, facilitating data-driven
          decision-making. Security and privacy are paramount, ensuring data
          protection compliance. With customization options and dedicated
          customer support, Library Lumina adapts to libraries of all sizes,
          making it a versatile and indispensable tool for modern library
          management.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
