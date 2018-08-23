import { darkSkyKey } from '../config';
import { KEY } from '../config';
import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = `https://api.darksky.net/forecast/${darkSkyKey}/`;
const GEOCODE_URL = `http://open.mapquestapi.com/geocoding/v1/address?key=${KEY}`;

export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const GET_NEW_LOCATION_WEATHER = 'GET_NEW_LOCATION_WEATHER';
export const SEARCH_LOCATION = 'SEARCH_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';

export const WEATHER_ERROR = 'WEATHER_ERROR';
export const LOCATION_ERROR = 'LOCATION_ERROR';

export const weatherError = error => {
  return {
    type: WEATHER_ERROR,
    payload: error
  };
};

export const locationError = error => {
  return {
    type: LOCATION_ERROR,
    payload: error
  };
};

export const getCurrentWeather = (lat, lng) => {
  return dispatch => {
    axios
      .get(
        `${PROXY_URL}` +
          `${ROOT_URL}${lat},${lng}?exclude=minutely,hourly,flags`
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

export const getNewLocationWeather = (lat, lng) => {
  return dispatch => {
    axios
      .get(
        `${PROXY_URL}` +
          `${ROOT_URL}${lat},${lng}?exclude=minutely,hourly,flags`
      )
      .then(response => {
        dispatch({
          type: GET_NEW_LOCATION_WEATHER,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(weatherError('Failed to read coordinates'));
      });
  };
};

export const searchLocation = location => {
  return dispatch => {
    axios
      .post(
        `${GEOCODE_URL}&inFormat=json&outFormat=json&json={"location":{"street":"${location}"},"options":{"thumbMaps":false}}`
      )
      .then(response => {
        dispatch({ type: SEARCH_LOCATION, payload: response.data });
      })
      .catch(() => {
        dispatch(locationError('Failed to geocode location'));
      });
  };
};

export const deleteLocation = location => {
  return {
    type: DELETE_LOCATION,
    payload: location
  };
};
