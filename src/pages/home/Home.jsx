import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftsidenav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightsidenav/RightSideNav";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();

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
      <div className="grid lg:grid-cols-4 grid-cols-1 justify-between mt-5 gap-5">
        <div className="leftnav">
          <LeftSideNav categories={categories} />
        </div>
        <div className="news col-span-2 grid grid-cols-1 gap-5">
          <h1>News Cooming sonn</h1>
          {news.map((singlenews, idx) => {
            return <NewsCard key={idx} singlenews={singlenews} />;
          })}
        </div>
        <div className="rightnav">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
