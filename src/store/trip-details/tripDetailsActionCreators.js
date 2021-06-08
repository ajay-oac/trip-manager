//import axios from "axios";
import * as tripDetailsActions from "./tripDetailsActions.js";

export const loadTripDetails = (dates) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      /*axios
        .post(
          "http://amazon.watsoo.com/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36",
          {
            clientId: 10,
            dataRecord: {
              userRoleId: 4,
              userRoleName: "COMPANY",
              userId: 10,
            },
            fromDate: dates.from,
            toDate: dates.to,
            tripId: 36,
          }
        )
        .then((response) => {
          dispatch({
            type: tripDetailsActions.LOAD_TRIP_DETAILS,
            payload: response.data,
          });

          resolve(true);
        })
        .catch((error) => {
          reject(true);
        });*/

      // Assuming that above API returns correct data from the back end
      const dataReturnedByApi = {
        vehicleName: "DL1LW 6461(TATA ACE)",
        totalTrips: 11,
        totalKm: "497.0 KM",
        tripTime: "10 Hrs 42 Min",
        totalTime: "15 Hrs 46 Min",
        totalExp: "Rs. 2000",
        otherExp: "Rs. 0.0",
        trips: [
          {
            id: "1232432",
            date:
              "04/20/2020 at 5:20 AM - 04/20/2020 at 4:35 PM (11 Hrs 15 Minutes)",
            totalKm: "265 KM",
            totalExp: "500",
            movements: [
              {
                id: "2902219",
                startEndNodes: "IFFCO CHOWK(5:20 AM) -> DWARKA(7:20 AM)",
                driverName: "ANDREW JOHN1",
                tripExpenses: "Rs. 0",
                tripKm: "65.0 Km",
                tripGpsKm: "0.00 Km",
                tripTime: "02 hrs 00 min",
                odometerReading: "10200 -> 10285",
              },
              {
                id: "2987981",
                startEndNodes: "IFFCO CHOWK(5:20 AM) -> DWARKA(7:20 AM)",
                driverName: "ANDREW JOHN1",
                tripExpenses: "Rs. 0",
                tripKm: "65.0 Km",
                tripGpsKm: "0.00 Km",
                tripTime: "02 hrs 00 min",
                odometerReading: "10200 -> 10285",
              },
              {
                id: "2901000",
                startEndNodes: "IFFCO CHOWK(5:20 AM) -> DWARKA(7:20 AM)",
                driverName: "ANDREW JOHN1",
                tripExpenses: "Rs. 0",
                tripKm: "65.0 Km",
                tripGpsKm: "0.00 Km",
                tripTime: "02 hrs 00 min",
                odometerReading: "10200 -> 10285",
              },
            ],
          },
          {
            id: "374892",
            date:
              "04/20/2020 at 5:20 AM - 04/20/2020 at 4:35 PM (11 Hrs 15 Minutes)",
            totalKm: "265 KM",
            totalExp: "500",
            movements: [
              {
                id: "2982110",
                startEndNodes: "IFFCO CHOWK(5:20 AM) -> DWARKA(7:20 AM)",
                driverName: "ANDREW JOHN1",
                tripExpenses: "Rs. 0",
                tripKm: "65.0 Km",
                tripGpsKm: "0.00 Km",
                tripTime: "02 hrs 00 min",
                odometerReading: "10200 -> 10285",
              },
            ],
          },
          {
            id: "23920110",
            date:
              "04/20/2020 at 5:20 AM - 04/20/2020 at 4:35 PM (11 Hrs 15 Minutes)",
            totalKm: "265 KM",
            totalExp: "500",
            movements: [
              {
                id: "1010108",
                startEndNodes: "IFFCO CHOWK(5:20 AM) -> DWARKA(7:20 AM)",
                driverName: "ANDREW JOHN1",
                tripExpenses: "Rs. 0",
                tripKm: "65.0 Km",
                tripGpsKm: "0.00 Km",
                tripTime: "02 hrs 00 min",
                odometerReading: "10200 -> 10285",
              },
              {
                id: "92028390",
                startEndNodes: "IFFCO CHOWK(5:20 AM) -> DWARKA(7:20 AM)",
                driverName: "ANDREW JOHN1",
                tripExpenses: "Rs. 0",
                tripKm: "65.0 Km",
                tripGpsKm: "0.00 Km",
                tripTime: "02 hrs 00 min",
                odometerReading: "10200 -> 10285",
              },
            ],
          },
        ],
      };

      dispatch({
        type: tripDetailsActions.LOAD_TRIP_DETAILS,
        payload: dataReturnedByApi,
      });

      resolve(true);
    });
  };
};
