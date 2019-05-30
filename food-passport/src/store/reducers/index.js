import {
  FETCHING_PASSPORTS,
  PASSPORTS_RETRIEVED,
  ADDING_PASSPORT,
  PASSPORT_ADDED,
  LOGIN_SUCCESS,
  DELETE_PASSPORT,
  PASSPORT_DELETED,
  UPDATE_PASSPORT,
  PASSPORT_UPDATED
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
    case PASSPORT_ADDED:
      return {
        ...state,
        passports: action.payload,
        loadingPassports: false,
        addingPassport: false
      };
    case DELETE_PASSPORT:
      return {
        ...state,
        loadingPassports: true,
        deletingPassport: true
      };
    case PASSPORT_DELETED:
      return {
        ...state,
        loadingPassports: false,
        deletingPassport: false
      };
    case UPDATE_PASSPORT:
      return {
        ...state,
        loadingPassports: true,
        updatingPassport: true
      };
    case PASSPORT_UPDATED:
      return {
        ...state,
        loadingPassports: false,
        updatingPassport: false
      };
    default:
      return state;
  }
}

export default passportReducer;
