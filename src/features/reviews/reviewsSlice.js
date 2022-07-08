import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: [],
    },
    reducers: {
        reviewAdded: (state, action) => {
            state.entities.push({
                comment: action.payload.comment,
                id: uuid(),
                restaurantId: action.payload.restaurantId,
            })
        },
        reviewRemoved: (state, action) => {
            state.entities = state.entities.filter(review => review.id !== action.payload)
        },
    },
});

export const { reviewAdded, reviewRemoved } = reviewSlice.actions;
export default reviewSlice.reducer;