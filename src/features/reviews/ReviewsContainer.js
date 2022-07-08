import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({restaurant}) {
  return (
    <div>
      <ReviewInput restaurant={restaurant}/>
      <Reviews restaurant={restaurant} />
    </div>
  );
}

export default ReviewsContainer;
