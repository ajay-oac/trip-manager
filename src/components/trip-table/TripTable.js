import { useState } from "react";
import classes from "./TripTable.module.css";

const TripTable = ({ tripInfo, movements }) => {
  const [isTableMinimised, setIsTableMinimised] = useState(false);

  const toggleIsTableMinimised = () => {
    setIsTableMinimised((isTableMinimised) => !isTableMinimised);
  };

  const tableRows = movements.map((movement, index) => (
    <tr key={movement.id}>
      <td>{index + 1}</td>
      <td>{movement.startEndNodes}</td>
      <td>{movement.driverName}</td>
      <td>{movement.tripExpenses}</td>
      <td>{movement.tripKm}</td>
      <td>{movement.tripGpsKm}</td>
      <td>{movement.tripTime}</td>
      <td>{movement.odometerReading}</td>
      <td>
        <button className={classes["action-button"]}>Movement Report</button>
        <button className={classes["action-button"]}>Stoppage Report</button>
      </td>
    </tr>
  ));

  return (
    <div className={classes["trip-table"]}>
      <div className={classes["trip-table-header"]}>
        <div className={classes["header-details"]}>
          <span>
            Date:
            {tripInfo.date}
          </span>
          <span>
            <span
              className={`${classes["total-kms"]} ${classes["margin-right"]}`}
            >
              Total KM:
              {tripInfo.totalKm}
            </span>
            <span className={classes["total-exp"]}>
              Total Expense:
              {tripInfo.totalExp}
            </span>
          </span>
        </div>
        <div
          className={classes["header-button"]}
          onClick={toggleIsTableMinimised}
        >
          {isTableMinimised ? (
            <i className="fa fa-window-maximize"></i>
          ) : (
            <i className="fa fa-window-minimize"></i>
          )}
        </div>
      </div>
      {!isTableMinimised ? (
        <div className={classes["trip-table-content"]}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Trip Starts(Node) to Trip Ends(Node)</th>
                <th>Driver Name</th>
                <th>Trip Expenses</th>
                <th>Trip Km</th>
                <th>Trip GPS Km</th>
                <th>Trip Time</th>
                <th>Odometer Reading</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default TripTable;
