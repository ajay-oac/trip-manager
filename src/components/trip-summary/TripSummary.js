import classes from "./TripSummary.module.css";
import Search from "../search.js/Search";
import Card from "../card/Card.js";
import { connect } from "react-redux";

const TripSummary = ({ tripDetails }) => {
  return (
    <section>
      <div className={classes["top-content"]}>
        <div>
          <h1>Trip Summary</h1>
          <span>
            <a href="#">Dashboard</a> / <a href="#">Trip Summary</a>
          </span>
        </div>
        <div className={classes["search-container"]}>
          <Search />
        </div>
      </div>

      <div className={classes["bottom-content"]}>
        <div className={classes["cards-grid"]}>
          <div>
            <Card cardColor="#29bdc2">
              <i className="fa fa-truck"></i>
              {tripDetails.vehicleName}
            </Card>
          </div>
          <div>
            <Card cardColor="#c2993b">
              <i className="fa fa-truck"></i>
              <span>Total Trips: </span>&nbsp;
              {tripDetails.totalTrips}
            </Card>
          </div>
          <div>
            <Card cardColor="#005a93">
              <i className="fa fa-tachometer"></i>
              <span>Total KM: </span>&nbsp;
              {tripDetails.totalKm}
            </Card>
          </div>
          <div>
            <Card cardColor="#00a74b">
              <i className="fa fa-clock-o"></i>
              <span>Trip Time: </span>&nbsp;
              {tripDetails.tripTime}
            </Card>
          </div>
          <div>
            <Card cardColor="#962297">
              <i className="fa fa-clock-o"></i>
              <span>Total Time: </span>&nbsp;
              {tripDetails.totalTime}
            </Card>
          </div>
          <div>
            <Card cardColor="#6a5718">
              <i className="fa fa-money"></i>
              <span>Total Exp: </span>&nbsp;
              {tripDetails.totalExp}
            </Card>
          </div>
        </div>
        <div className={classes["other-exp-card-container"]}>
          <div className={classes["other-exp-card"]}>
            <Card cardColor="#2f2f2f">
              <i className="fa fa-money"></i>
              <span>Other Exp: </span>&nbsp;
              {tripDetails.otherExp}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    tripDetails: {
      vehicleName: state.trip.vehicleName,
      totalTrips: state.trip.totalTrips,
      totalKm: state.trip.totalKm,
      tripTime: state.trip.tripTime,
      totalTime: state.trip.totalTime,
      totalExp: state.trip.totalExp,
      otherExp: state.trip.otherExp,
    },
  };
};

export default connect(mapStateToProps, null)(TripSummary);
