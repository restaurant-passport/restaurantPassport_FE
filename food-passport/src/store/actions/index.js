import axios from "axios";

<<<<<<< HEAD
export const FETCHING_PASSPORTS = "FETCHING_PASSPORTS";
export const PASSPORTS_RETRIEVED = "PASSPORTS_RETRIEVED";
export const ADDING_PASSPORT = "ADDING_PASSPORT";
export const ADDED_PASSPORT = "ADDED_PASSPORT";

// Fetching Passports
export const getPassports = () => dispatch => {
  dispatch({
    type: FETCHING_PASSPORTS
  });
  axios
    .get("http://localhost:3333/passports")
    .then(response => {
      console.log(response.data);
      dispatch({
        type: PASSPORTS_RETRIEVED,
=======
export const FETCHING_CITIES = "FETCHING_CITIES";
export const CITIES_RETRIEVED = "CITIES_RETRIEVED";

export const getCities = () => dispatch => {
  dispatch({
    type: FETCHING_CITIES
  });
  axios
    .get("")
    .then(response => {
      console.log(response.data);
      dispatch({
        type: CITIES_RETRIEVED,
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
<<<<<<< HEAD
};

//Add Passport
export const addPassport = passport => dispatch => {
  dispatch({
    type: ADDING_PASSPORT
  });
  axios
    .post("http://localhost:3333/passports", passport)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: ADDED_PASSPORT,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

// Login Token
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export function login() {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  };
}
=======
};
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
