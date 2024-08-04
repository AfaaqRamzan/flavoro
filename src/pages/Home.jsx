import React from "react";

import CategoryMenu from "../components/CategoryMenu";
import Navbar from "../components/NavBar";
import FoodItems from "../components/FoodItems";
const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
 
    </>
  );
};

export default Home;