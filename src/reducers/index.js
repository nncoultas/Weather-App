import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';
import { locationReducer } from './locationReducer';
import { newWeatherReducer } from '../reducers/newWeatherReducer';
import { cityStateReducer } from '../reducers/cityStateReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  newWeather: newWeatherReducer,
  cityState: cityStateReducer
});

export default rootReducer;
