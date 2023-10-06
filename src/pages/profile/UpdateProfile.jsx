import { useContext } from "react";
import Header from "../shared/header/Header";
import Navlinks from "../shared/navbar/Navlinks";
import { AuthContext } from "../../provider/AuthProvider";
import "./profile.css";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <Navlinks />
      <div className="profile">
        <div className="card">
          <form className="space-y-5">
            <div className="name">
              <label htmlFor="phone">Photo Url</label>
              <input
                type="text"
                name="photo"
                value={user?.photoURL}
                placeholder="Photo URL"
              />
            </div>
            <div className="name">
              <label htmlFor="phone">Name</label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                placeholder="Name"
              />
            </div>
            <div className="status">
              <label htmlFor="phone">Email</label>
              <input
                type="email"
                name="email"
                value={user?.email}
                placeholder="Email"
              />
            </div>
            <div className="status">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                name="number"
                value={user?.phoneNumber}
                placeholder="Number"
              />
            </div>
            <input type="submit" value="Edit Profile" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
