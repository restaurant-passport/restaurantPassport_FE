import {
  FETCHING_PASSPORTS,
  PASSPORTS_RETRIEVED,
  ADDING_PASSPORT,
  PASSPORT_ADDED,
  DELETE_PASSPORT,
  PASSPORT_DELETED,
  // UPDATE_PASSPORT,
  // PASSPORT_UPDATED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions";

const initialState = {
  user: {},
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
    case LOGIN_START:
      return {
        ...state,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false
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
        passports: [...state.passports, action.payload],
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
        // passports: action.payload
        deletingPassport: true
      };
    case PASSPORT_DELETED:
      return {
        ...state,
        loadingPassports: false,
        deletingPassport: false
      };
    default:
      return state;
  }
}

export default passportReducer;
