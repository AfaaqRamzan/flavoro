import React from "react";

import CategoryMenu from "../components/CategoryMenu";
import Navbar from "../components/NavBar";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
 
    </>
  );
};

export default Home;