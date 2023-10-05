import { NavLink } from "react-router-dom";
import "./nav.css";

const LeftSideNav = ({ categories }) => {
  return (
    <div>
      <h1>All Caterogy</h1>
      <div className="news-cat">
        <ul>
          {categories?.map((cat, idx) => {
            return (
              <NavLink key={idx} to={`/category/${cat.id}`}>
                <li className="py-3">{cat.name}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNav;
