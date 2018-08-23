import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';
import { locationReducer } from './locationReducer';
import { newWeatherReducer } from '../reducers/newWeatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  newWeather: newWeatherReducer
});

export default rootReducer;
