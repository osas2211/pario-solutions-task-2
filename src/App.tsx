import React, { useEffect } from 'react';
import './App.scss';
import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Dashboard } from './components/Dashboard'

function App() {
  const state = useSelector((state: RootState) => state.covidNigeria)
  const dispatch = useDispatch()
  // useEffect(()=> {
  //   axios.get("https://covidnigeria.herokuapp.com/api")
  //   .then(response => {
  //     window.sessionStorage.setItem("covidData", JSON.stringify(response.data.data))
  //   });
  //   console.log(state)
  // })
  return (
    <div className="App">
      <Dashboard /> 
    </div>
  );
}

export default App;
