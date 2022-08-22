import { createSlice } from "@reduxjs/toolkit";

const data = JSON.parse(window.sessionStorage.getItem("covidData") as string);

export const covidNigeriaSlice = createSlice({
  name: "covidNigeria",
  initialState: data?.states.filter((state: any) => state.state == "Kogi")[0],
  reducers: {
    getCountryState: (state, action) => {
      const countryState = data.states.filter(
        (state: any) =>
          state.state.toUpperCase() == action.payload.toUpperCase()
      )[0];
      return countryState;
    },
  },
});

export const covidNigeriaReducer = covidNigeriaSlice.reducer;
export const { getCountryState } = covidNigeriaSlice.actions;
