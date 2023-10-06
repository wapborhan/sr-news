import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navlinks from "../shared/navbar/Navlinks";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((user) => {
        console.log(user.user);
        navigate(location?.state ? location.state : "/");
      })
      .cath((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Navlinks />
      <div className="hero min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/2 md:w-3/4 mx-auto justify-center">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
            <h2 className="text-center mt-7 lg:text-3xl text-[18px] font-bold">
              Login your account
            </h2>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center pb-5">
              {"Don't"} have accounts
              <NavLink to="/register" className="underline">
                {" "}
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
