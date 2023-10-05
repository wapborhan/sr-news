import logo from "../../../assets/images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="header text-center w-full mt-8 space-y-4">
      <img src={logo} className="mx-auto" alt="logo" />
      <h2 className="text-slate-400 ">Journalism Without Fear or Favour</h2>
      <div className="time text-[20px]">
        {moment().format("dddd, MMMM, D YYYY")}
      </div>
    </div>
  );
};

export default Header;
