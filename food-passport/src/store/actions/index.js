import axios from "axios";

export const URL = "https://foodpassword-bw.herokuapp.com";

// Login Token
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${URL}/auth/login`, creds)
    .then(res => {
      console.log("hello", res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
    });
};

// Fetching Users
export const FETCHING_USERS = "FETCHING_USERS";
export const USERS_FOUND = "USERS_FOUND";
export const FETCHING_USERS_FAIL = "FETCHING_USERS_FAIL";

export const getUsers = () => dispatch => {
  dispatch({
    type: FETCHING_USERS
  });
  axios
    .get(`${URL}/api/users`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCHING_USERS_FAIL
      });
    });
};

// Fetching Passports
export const FETCHING_PASSPORTS = "FETCHING_PASSPORTS";
export const PASSPORTS_RETRIEVED = "PASSPORTS_RETRIEVED";

export const getPassports = () => dispatch => {
  dispatch({
    type: FETCHING_PASSPORTS
  });
  axios
    .get(`https://foodpassword-bw.herokuapp.com/api/passport`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log(response);
      dispatch({
        type: PASSPORTS_RETRIEVED,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Add Passport
export const ADDING_PASSPORT = "ADDING_PASSPORT";
export const PASSPORT_ADDED = "PASSPORT_ADDED";

export const addPassport = passport => dispatch => {
  dispatch({
    type: ADDING_PASSPORT
  });
  axios
    .post(`${URL}/api/passport`, passport, {
      headers: { Authorization: localStorage.getItem("token") }
    })
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
    .delete(`${URL}/api/passport/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
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

// Update Passport
// export const UPDATE_PASSPORT = "UPDATE_PASSPORT";
// export const PASSPORT_UPDATED = "PASSPORT_UPDATED";

// export const updatePassport = passport => dispatch => {
//   dispatch({
//     type: UPDATE_PASSPORT
//   });
//   axios
//     .put(`http://localhost:3333/passports/${passport.id}`, passport,{
//       headers: { Authorization: token }})
//     .then(response => {
//       dispatch({
//         type: PASSPORT_UPDATED,
//         payload: response.data
//       });
//       this.props.history.push("/passports");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// Fetch Restaurants
export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FOUND_RESTAURANTS = "FOUND_RESTAURANTS";
export const FAIL_FETCHING_RESTAURANTS = "FETCHING_RESTAURANTS_FAIL";

export const getRestaurants = () => dispatch => {
  dispatch({
    type: FETCH_RESTAURANTS
  });
  axios
    .get(`${URL}/api/rest`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: FOUND_RESTAURANTS
      }).catch(err => {
        console.log(err);
        dispatch({
          type: FAIL_FETCHING_RESTAURANTS
        });
      });
    });
};

// Fetch Restaurant by Id
export const FETCH_RESTAURANT_ID = "FETCH_RESTAURANT_ID";
export const FOUND_RESTAURANT_ID = "FOUND_RESTAURANT_ID";
export const FAIL_RESTAURANT_ID = "FAIL_RESTAURANT_ID";

export const getRestaurantById = () => dispatch => {
  dispatch({
    type: FETCH_RESTAURANT_ID
  });
  axios
    .get(`${URL}/api/rest/:id`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: FOUND_RESTAURANT_ID
      }).catch(err => {
        console.log(err);
        dispatch({
          type: FAIL_RESTAURANT_ID
        });
      });
    });
};

// Add Restaurant
export const ADD_RESTAURANT = "ADD_RESTAURANT";
export const ADDED_RESTAURANT = "ADDED_RESTAURANT";
export const FAIL_ADD_RESTAURANT = "FAIL_ADD_RESTAURANT";

export const addRestaurant = () => dispatch => {
  dispatch({
    type: ADD_RESTAURANT
  });
  axios
    .post(`${URL}/api/rest`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: ADDED_RESTAURANT
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FAIL_ADD_RESTAURANT
      });
    });
};

// Delete Restaurant by Id
export const DELETE_RESTAURANT = "DELETE_RESTAURANT";
export const DELETED_RESTAURANT = "DELETED_RESTAURANT";
export const FAIL_DELETE_RESTAURANT = "FAIL_DELETE_RESTAURANT";

export const deleteRestaurant = id => dispatch => {
  dispatch({
    type: DELETE_RESTAURANT
  });
  axios
    .delete(`${URL}/api/rest/:id`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FAIL_DELETE_RESTAURANT
      });
    });
};