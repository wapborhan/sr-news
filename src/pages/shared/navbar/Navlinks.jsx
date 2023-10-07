import { NavLink, useNavigate } from "react-router-dom";
import proImage from "../../../assets/images/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Navlinks = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handeLogout = () => {
    logOut();
    navigate("/");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/carrer">Carrer</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-4 items-center">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={proImage} className="w-10" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/profile" className="justify-between">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/update-profile">Settings</NavLink>
              </li>
              <li>
                <a onClick={handeLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login" className="bg-[#403F3F] px-8 py-2 text-white ">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navlinks;
