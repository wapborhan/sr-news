import { NavLink } from "react-router-dom";
import Navlinks from "../shared/navbar/Navlinks";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photourl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const terms = form.get("terms");

    createUser(email, password)
      .then((user) => {
        console.log(user.user);
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
              Register your account
            </h2>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label className="label flex justify-start">
                  <input type="checkbox" name="terms" className="mr-4" />
                  Accept Term & Conditions
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Registration"
                />
              </div>
            </form>
            <p className="text-center pb-5">
              Already have an account
              <NavLink to="/login" className="underline">
                {" "}
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
