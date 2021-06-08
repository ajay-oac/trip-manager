import { Fragment, useState } from "react";
import classes from "./Search.module.css";
import { connect } from "react-redux";
import { loadTripDetails } from "../../store/trip-details/tripDetailsActionCreators.js";

const Search = ({ search }) => {
  const nowDate = new Date();
  const initialDate = `${nowDate.getDate()}-${
    nowDate.getMonth() + 1
  }-${nowDate.getFullYear()}`;

  const [fromDate, setFromDate] = useState(initialDate);
  const [toDate, setToDate] = useState(initialDate);
  const [fromDateTimestamp, setFromDateTimestamp] = useState(null);
  const [toDateTimestamp, setToDateTimestamp] = useState(null);
  const [dateError, setDateError] = useState({
    fromDateError: false,
    toDateError: false,
  });

  const handleDateChange = ({ target }) => {
    if (target.id === "fromDate") {
      setFromDate(target.value);
      setFromDateTimestamp(target.valueAsNumber);

      setToDate("");
      setToDateTimestamp(null);

      setDateError((dateError) => ({ ...dateError, fromDateError: false }));
    } else {
      setToDate(target.value);
      setToDateTimestamp(target.valueAsNumber);

      setDateError((dateError) => ({ ...dateError, toDateError: false }));
    }
  };

  const clickHandler = () => {
    if (!fromDateTimestamp) {
      setDateError((dateError) => ({ ...dateError, fromDateError: true }));
      return;
    }

    if (!toDateTimestamp) {
      setDateError((dateError) => ({ ...dateError, toDateError: true }));
      return;
    }

    search({
      from: fromDateTimestamp,
      to: toDateTimestamp,
    });
  };

  let fromDateClasses = `${classes["margin-right"]} ${classes.input}`;
  if (dateError.fromDateError) fromDateClasses += ` ${classes.error}`;

  let toDateClasses = `${classes["margin-right"]} ${classes.input}`;
  if (dateError.toDateError) toDateClasses += ` ${classes.error}`;

  return (
    <Fragment>
      <div>
        <label
          htmlFor="fromDate"
          className={`${classes["margin-right"]} ${classes.label}`}
        >
          From
        </label>
        <input
          id="fromDate"
          type="date"
          className={fromDateClasses}
          value={fromDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label
          htmlFor="toDate"
          className={`${classes["margin-right"]} ${classes.label}`}
        >
          To
        </label>
        <input
          id="toDate"
          type="date"
          className={toDateClasses}
          value={toDate}
          min={fromDate}
          onChange={handleDateChange}
        />
      </div>
      <button className={classes["search-button"]} onClick={clickHandler}>
        <i className="fa fa-search"></i>
      </button>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (dates) => dispatch(loadTripDetails(dates)),
  };
};

export default connect(null, mapDispatchToProps)(Search);
