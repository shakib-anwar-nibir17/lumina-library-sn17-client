import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navabar/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto font-custom">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
