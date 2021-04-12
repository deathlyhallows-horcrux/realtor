import {combineReducers} from 'redux';
import getDataReducer from './getDataReducer';

const rootReducer = combineReducers({
  getData: getDataReducer
});

export default rootReducer;