import { Fragment } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import TripDetails from "./components/trip-details/TripDetails";

function App() {
  return (
    <Fragment>
      <Header />
      <TripDetails />
    </Fragment>
  );
}

export default App;
