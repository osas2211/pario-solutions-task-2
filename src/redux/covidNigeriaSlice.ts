import { createSlice } from "@reduxjs/toolkit";

export const covidNigeriaSlice = createSlice({
  name: "covidNigeria",
  initialState: JSON.parse(
    window.sessionStorage.getItem("covidData") as string
  ),
  reducers: {
    getCountryState: (state, action) => {
      return action.payload;
    },
  },
});

export const covidNigeriaReducer = covidNigeriaSlice.reducer;
export const { getCountryState } = covidNigeriaSlice.actions;
