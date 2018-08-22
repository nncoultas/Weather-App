import key from '../config';
import axios from 'axios';

const ROOT_URL = `https://api.darksky.net/forecast/${key}/`;

export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';

export const WEATHER_ERROR = 'WEATHER_ERROR';

export const weatherError = error => {
  return {
    type: WEATHER_ERROR,
    payload: error
  };
};

export const getCurrentWeather = (lat, long) => {
  return dispatch => {
    axios
      .get(
        `${ROOT_URL}latitude=${lat},longitude=${long}?exclude=minutely,hourly,daily,flags`
      )
      .then(response => {
        dispatch({
          type: GET_CURRENT_WEATHER,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(weatherError('Failed to read coordinates'));
      });
  };
};
