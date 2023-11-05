import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container mx-auto font-custom">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
