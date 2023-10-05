import BreakingNews from "./BreakingNews";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-100 py-2 mt-4">
        <BreakingNews />
      </div>
      <Navlinks />
    </>
  );
};

export default Navbar;
