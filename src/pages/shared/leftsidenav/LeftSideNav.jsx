import { useEffect } from "react";
import "./nav.css";

const LeftSideNav = () => {
  useEffect(() => {
    fetch("../../../assets/data/categories.json")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>All Caterogy</h1>
      <div className="news-cat">
        <ul>
          <li className="active">List-1</li>
          <li>List-2</li>
          <li>List-3</li>
          <li>List-4</li>
          <li>List-5</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNav;
