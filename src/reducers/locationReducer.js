import { SEARCH_LOCATION } from '../actions/actions';

export const locationReducer = (location = [], action) => {
  switch (action.type) {
    case SEARCH_LOCATION:
      console.log(action.payload.results[0].locations[0].latLng);
      return [...location, action.payload.results[0].locations[0].latLng];
    default:
      return location;
  }
};
