import { useEffect } from "react";
import TripSummary from "../trip-summary/TripSummary.js";
import TripTable from "../trip-table/TripTable.js";
import classes from "./TripDetails.module.css";
import { loadTripDetails } from "../../store/trip-details/tripDetailsActionCreators.js";
import { connect } from "react-redux";

const TripDetails = ({ trips, loadInitialTripDetails }) => {
  useEffect(() => {
    loadInitialTripDetails({
      from: new Date().getTime(),
      to: new Date().getTime(),
    });
  }, []);

  const tripTables = trips
    ? trips.map((trip) => {
        const tripInfo = {
          date: trip.date,
          totalKm: trip.totalKm,
          totalExp: trip.totalExp,
        };
        return (
          <TripTable
            key={trip.id}
            tripInfo={tripInfo}
            movements={trip.movements}
          />
        );
      })
    : null;

  return (
    <main className={classes["trip-details-container"]}>
      <TripSummary />
      {tripTables}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    trips: state.trip.trips,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialTripDetails: (dates) => dispatch(loadTripDetails(dates)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
