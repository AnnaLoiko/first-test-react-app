import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import bookReducer from './bookReducer';
import youtubeReducer from './youtubeReducer';
import currencyReducer from './currencyReducer';
import memesReducer from './memesReducer';

const reducers = combineReducers({
  listWeather: weatherReducer,
  books: bookReducer,
  youtube: youtubeReducer,
  currency: currencyReducer,
  memes: memesReducer,
});

export default reducers;