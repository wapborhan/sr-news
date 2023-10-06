import { useContext } from "react";
import Header from "../shared/header/Header";
import Navlinks from "../shared/navbar/Navlinks";
import { AuthContext } from "../../provider/AuthProvider";
import "./profile.css";
import proImage from "../../assets/images/user.png";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const image = <img src={proImage} className="w-10" alt="" />;

  console.log(user);
  return (
    <div>
      <Header />
      <Navlinks />
      <div className="profile">
        <div className="card">
          <form>
            <label className="custom-file-upload fas">
              <div className="img-wrap">
                {user?.photoURL ? user?.photoURL : image}
              </div>
            </label>
            <div className="name">{user?.displayName}</div>
            <div className="status">{user?.email}</div>
            <div className="status2">{user?.metadata?.creationTime}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
