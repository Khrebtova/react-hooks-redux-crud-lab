import React from "react";
import { useSelector} from "react-redux";
import Restaurant from "./Restaurant";


function Restaurants() {
  
  const restaurants = useSelector((state) => state.restaurants.entities);
  console.log(restaurants);

  return (
    <ul>
      {restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
    </ul>
  );
}

export default Restaurants;
