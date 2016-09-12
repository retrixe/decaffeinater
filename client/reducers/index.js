import { combineReducers } from 'redux';
import ConfigReducer from './config';

const rootReducer = combineReducers(
  {
    config: ConfigReducer
  }
);

export default rootReducer;
