import { combineReducers } from 'redux';
import message from './message';
import userInfo from './userInfo';

const reducers = combineReducers({
  message,
  userInfo
});

export default reducers;
