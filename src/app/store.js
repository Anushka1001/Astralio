import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import movieReducer from "../features/users/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});