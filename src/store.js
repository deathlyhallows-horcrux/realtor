import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import getDataReducer from './reducers/getDataReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk];
const rootReducer = combineReducers({
  getData: getDataReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;