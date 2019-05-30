<<<<<<< HEAD
import {
  FETCHING_PASSPORTS,
  PASSPORTS_RETRIEVED,
  ADDING_PASSPORT,
  ADDED_PASSPORT,
  LOGIN_SUCCESS
} from "../actions";

const initialState = {
  isLoggedIn: false,
  passports: [
    {
      city: "",
      restaurants: []
    }
  ],
  loadingPassports: false,
  addingPassport: false,
  deletingPassport: false,
  updatingPassport: false
=======
import { FETCHING_CITIES, CITIES_RETRIEVED } from "../actions";

const initialState = {
  passports: [],
  loadingPassports: false
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
};

function passportReducer(state = initialState, action) {
  switch (action.type) {
<<<<<<< HEAD
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case FETCHING_PASSPORTS:
=======
    case FETCHING_CITIES:
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
      return {
        ...state,
        loadingPassports: true
      };
<<<<<<< HEAD
    case PASSPORTS_RETRIEVED:
=======
    case CITIES_RETRIEVED:
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
      return {
        ...state,
        passports: action.payload,
        loadingPassports: false
      };
<<<<<<< HEAD
    case ADDING_PASSPORT:
      return {
        ...state,
        loadingPassports: true,
        addingPassport: true
      };
    case ADDED_PASSPORT:
      return {
        ...state,
        passports: action.payload,
        loadingPassports: false,
        addingPassport: false
      };
=======
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
    default:
      return state;
  }
}

<<<<<<< HEAD
export default passportReducer;
=======
export default passportReducer;
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
