import axios from "axios";

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

// Fetching Passports
export const FETCHING_PASSPORTS = "FETCHING_PASSPORTS";
export const PASSPORTS_RETRIEVED = "PASSPORTS_RETRIEVED";

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
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//Add Passport
export const ADDING_PASSPORT = "ADDING_PASSPORT";
export const PASSPORT_ADDED = "PASSPORT_ADDED";

export const addPassport = passport => dispatch => {
  dispatch({
    type: ADDING_PASSPORT
  });
  axios
    .post("http://localhost:3333/passports", passport)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: PASSPORT_ADDED,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

// Delete Passport
export const DELETE_PASSPORT = "DELETE_PASSPORT";
export const PASSPORT_DELETED = "PASSPORT_DELETED";

export const deletePassport = id => dispatch => {
  dispatch({
    type: DELETE_PASSPORT
  });
  axios
    .delete(`http://localhost:3333/passports/${id}`)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: PASSPORT_DELETED,
        payload: response.data
      });
      this.props.history.push("/passports");
    })
    .catch(error => {
      console.log(error);
    });
};

//Update Passport
export const UPDATE_PASSPORT = "UPDATE_PASSPORT";
export const PASSPORT_UPDATED = "PASSPORT_UPDATED";

export const updatePassport = passport => dispatch => {
  dispatch({
    type: UPDATE_PASSPORT
  });
  axios
    .put(`http://localhost:3333/passports/${passport.id}`, passport)
    .then(response => {
      dispatch({
        type: PASSPORT_UPDATED,
        payload: response.data
      });
      this.props.history.push("/passports");
    })
    .catch(error => {
      console.log(error);
    });
};