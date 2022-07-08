import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux";
import { restaurantRemoved, restaurantEdited } from "../restaurants/restaurantsSlice";

function Restaurant({ restaurant}) {
  const [isEditing, setIsEditing] = React.useState(false);
  
  const [newName, setNewName] = React.useState(restaurant.name);

  const dispatch = useDispatch();  
  const handleDeleteClick = () => {
    dispatch(restaurantRemoved(restaurant.id));
  }

  const handleEditClick = () => {
    console.log("edit clicked");
    setIsEditing(true);
  }
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(restaurantEdited({
      ...restaurant, name: newName
    }));
    setIsEditing(false);
  }

  const editForm = () => {
    return(      
      <form onSubmit={handleEditSubmit}>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button type="submit">Save</button>
      </form>        
    )
  }

  const displayForm = () => {
    return (
      <li>
        <h2>{restaurant.name}</h2>        
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <button onClick={handleEditClick}> Edit </button>
        
      </li> 
    )
  }
  return (
    <div>      
      {isEditing ? editForm() : displayForm()}
      <ReviewsContainer restaurant={restaurant} />
    </div>
  );
}

export default Restaurant;
