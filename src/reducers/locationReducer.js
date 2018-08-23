import { SEARCH_LOCATION, DELETE_LOCATION } from '../actions/actions';

export const locationReducer = (location = [], action) => {
  switch (action.type) {
    case SEARCH_LOCATION:
      return [...location, action.payload.results[0].locations[0].latLng];
    case DELETE_LOCATION:
      return (location = []);
    default:
      return location;
  }
};
