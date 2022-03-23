// ROOT REDUCER
//store 생성은 src/index.js
import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
