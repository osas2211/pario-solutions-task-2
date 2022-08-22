import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryState } from "../redux/covidNigeriaSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { RootState } from "../redux/store";
import { Button, TextField } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Dashboard = () => {
  const state = useSelector((state: RootState) => state.covidNigeria);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${state.state} State Bar Chart`,
      },
    },
  };

  const labels = ["casesOnAdmission", "confirmedCases", "death", "discharged"];

  const { casesOnAdmission, confirmedCases, death, discharged } = state;
  const data = {
    labels,
    datasets: [
      {
        label: "Data",
        data: { casesOnAdmission, confirmedCases, death, discharged },
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <div style={{marginTop: "2rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <TextField value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter state"/>
        <Button
        style={{marginLeft: 5}}
          variant="contained"
          onClick={() =>
            dispatch({ type: getCountryState.type, payload: input })
          }
        >
          Search
        </Button>
      </div>

      <Bar options={options} data={data} />
    </>
  );
};
