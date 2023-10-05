import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftsidenav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightsidenav/RightSideNav";
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="font-poppins">
      <Header />
      <Navbar />
      <div className="grid grid-cols-4 justify-between mt-5 gap-5">
        <div className="leftnav">
          <LeftSideNav categories={categories} />
        </div>
        <div className="news col-span-2">
          <h1>News Cooming sonn</h1>
        </div>
        <div className="rightnav">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
