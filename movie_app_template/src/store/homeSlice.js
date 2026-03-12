import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    setApiConfiguration: (state, action) => {
      // update url state
      // console.log(state);
      // console.log(action);
      state.url=action.payload
    },
  },
});

// Action creators are generated for each case reducer function

export const { setApiConfiguration } = homeSlice.actions;

export default homeSlice.reducer;
