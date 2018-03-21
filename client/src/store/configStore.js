import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ProfileReducer from '../reducers/profile';
import authReducer from '../reducers/auth';
import projectReducer from '../reducers/project';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      profile: ProfileReducer,
      auth: authReducer,
      project: projectReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
}