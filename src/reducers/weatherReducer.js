import { GET_CURRENT_WEATHER } from '../actions/actions';

export const weatherReducer = (weather = [], action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return action.payload.daily.data.slice(0, 5);
    default:
      return weather;
  }
};
