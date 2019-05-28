import { FETCHING_CITIES, CITIES_RETRIEVED } from "../actions";

const initialState = {
  passports: [],
  loadingPassports: false
};

function passportReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_CITIES:
      return {
        ...state,
        loadingPassports: true
      };
    case CITIES_RETRIEVED:
      return {
        ...state,
        passports: action.payload,
        loadingPassports: false
      };
    default:
      return state;
  }
}

export default passportReducer;
