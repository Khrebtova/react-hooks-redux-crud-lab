import React from "react";
// import Reviews from "./Reviews";
import {useDispatch} from "react-redux";
import {reviewAdded} from "./reviewsSlice";

function ReviewInput({restaurant}) {
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch();

  const handleInputChange =(e)=>{
    setComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewAdded({
      comment: comment,
      restaurantId: restaurant.id,
      })
    )
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment
        <textarea
          type="text"
          name="comment"
          value={comment}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Review</button>
    </form>
  )
}

export default ReviewInput;
