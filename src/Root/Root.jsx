import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto font-custom">
      <div>
        <Navbar></Navbar>
        <div className="h-2 bg-custom-main lg:hidden"></div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
