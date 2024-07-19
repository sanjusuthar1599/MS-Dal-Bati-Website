// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./home.css";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay";
import AppDowload from "../../component/AppDowload/AppDowload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDowload />
    </div>
  );
};

export default Home;
