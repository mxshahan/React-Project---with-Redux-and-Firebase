import {createStore, combineReducers} from 'redux';
import ProfileReducer from '../reducers/profile';

export default () => {
  const store = createStore(
    combineReducers({
      ProfileReducer
    })
  );
  return store;
}