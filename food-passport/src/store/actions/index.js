import axios from "axios";

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
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};