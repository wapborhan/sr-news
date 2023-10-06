import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="lg:max-w-6xl max-w-2xl mx-auto font-poppins">
      <Outlet />
    </div>
  );
};

export default Root;
