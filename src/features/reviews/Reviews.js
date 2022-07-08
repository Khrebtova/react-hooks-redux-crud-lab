import React from "react";
import Review from "./Review";
import {useSelector } from "react-redux";

function Reviews({restaurant}) {
  console.log(restaurant.id)
  const reviews = useSelector((state) => state.reviews.entities);
  const restaurantReviews = reviews.filter(review => review.restaurantId === restaurant.id);
 
  return (
    <ul>
      {restaurantReviews.map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default Reviews;
