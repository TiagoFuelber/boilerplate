import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { quizReducer as quiz } from './quiz/index';
import { peopleReducer as people } from './people/index';
import * as container from '../container';

const reducers = combineReducers({ quiz, people });

export default createStore(
  reducers,
  applyMiddleware(thunkMiddleware.withExtraArgument(container))
);
