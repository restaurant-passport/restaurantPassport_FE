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
};

function passportReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case FETCHING_PASSPORTS:
      return {
        ...state,
        loadingPassports: true
      };
    case PASSPORTS_RETRIEVED:
      return {
        ...state,
        passports: action.payload,
        loadingPassports: false
      };
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
    default:
      return state;
  }
}

export default passportReducer;
