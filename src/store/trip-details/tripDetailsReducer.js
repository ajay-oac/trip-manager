import * as tripDetailsActions from "./tripDetailsActions.js";

const initialTripDetails = {
  vehicleName: "",
  totalTrips: null,
  totalKm: null,
  tripTime: null,
  totalTime: null,
  totalExp: null,
  otherExp: null,
  trips: null,
};

const tripDetailsReducer = (state = initialTripDetails, { type, payload }) => {
  switch (type) {
    case tripDetailsActions.LOAD_TRIP_DETAILS:
      return payload;
    default:
      return state;
  }
};

export default tripDetailsReducer;
