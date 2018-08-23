import { GET_NEW_LOCATION_WEATHER } from '../actions/actions';

export const newWeatherReducer = (newWeather = [], action) => {
  switch (action.type) {
    case GET_NEW_LOCATION_WEATHER:
      return action.payload.daily.data.slice(0, 5);
    default:
      return newWeather;
  }
};
