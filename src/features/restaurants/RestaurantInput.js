import React from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName("")
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Restaurant</button>
    </form>
  )
}

export default RestaurantInput;
