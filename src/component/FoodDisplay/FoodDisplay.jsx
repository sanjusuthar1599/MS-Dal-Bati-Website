import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../context/storecontext";
// import { food_list } from "../../../public/assets";
import Fooditem from "../Fooditem/Fooditem";

const FoodDisplay = ({ category }) => {
  const data = useContext(StoreContext);

  const { food_list, cartItem, addToCart, removeFromCart } = data;

  console.log("food_list", food_list);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <React.Fragment key={item._id}>
                <Fooditem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
