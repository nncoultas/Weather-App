import { GET_CURRENT_CITYSTATE } from '../actions/actions';

export const cityStateReducer = (cityState = [], action) => {
  switch (action.type) {
    case GET_CURRENT_CITYSTATE:
      return action.payload.results[0].locations[0];
    default:
      return cityState;
  }
};
