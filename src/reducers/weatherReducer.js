import { GET_CURRENT_WEATHER } from '../actions/actions';

export const weatherReducer = (current = [], action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return { ...current, current: action.payload.data };
    default:
      return current;
  }
};
