import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { start } from "repl";

const data = JSON.parse(window.sessionStorage.getItem("covidData") as string);

export const fetchData = createAsyncThunk(
  "states/fetch",
  async (input: string, thunkAPI) => {
    const response = await axios.get("https://covidnigeria.herokuapp.com/api");
    const data = await response.data;
    return data.data.states.filter(
      (state: any) => state.state.toUpperCase() == input.toUpperCase()
    )[0];
  }
);

export const covidNigeriaSlice = createSlice({
  name: "covidNigeria",
  initialState: { loading: false, entities: {} as any },
  reducers: {},
  extraReducers: {
    [fetchData.pending as any]: (state: any) => {
      state.loading = true;
    },

    [fetchData.fulfilled as any]: (state: any, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },

    [fetchData.rejected as any]: (state: any) => {
      state.loading = false;
    },
  },
});

export const covidNigeriaReducer = covidNigeriaSlice.reducer;
