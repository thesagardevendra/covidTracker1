import { useEffect, useState } from "react";
import "./styles.css";

export default function Covid() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData);

      setData(actualData.statewise[21]);
      console.log(setData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <h1> Live Maharashtra Covid Tracker</h1>
      <div className="covid">
        <p class="main">
          Last Update Time
          <p class="content">{data.lastupdatedtime}</p>
        </p>
        <p class="main">
          Active
          <p class="content">{data.active}</p>
        </p>
        <p class="main">
          Confirmed
          <p class="content">{data.confirmed}</p>
        </p>
        <p class="main">
          Recovered
          <p class="content">{data.recovered}</p>
        </p>
        <p class="main">
          Deaths
          <p class="content">{data.deaths}</p>
        </p>
        <p class="main">
          State
          <p class="content">{data.State}</p>
        </p>
        <p class="main">
          Total Recovered
          <p class="content">{data.totalrecovered}</p>
        </p>
        <p class="main">
          ActiveCases
          <p class="content">{data.active}</p>
        </p>
      </div>
    </div>
  );
}
