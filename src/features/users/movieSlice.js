import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entertainment: null,
  movies: null,
  fictions: null,
  nonFictions: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.entertainment = action.payload.entertainment;
      state.movies = action.payload.movies;
      state.fictions = action.payload.fictions;
      state.nonFictions = action.payload.nonFictions;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectEntertainment = (state) => state.movie.entertainment;
export const selectMovies = (state) => state.movie.movies;
export const selectFictions = (state) => state.movie.fictions;
export const selectNonFictions = (state) => state.movie.nonFictions;

export default movieSlice.reducer;