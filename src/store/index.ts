import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {moviesReducer} from './movies/moviesReducer';

const reducers = combineReducers({
  movies: moviesReducer,
});

export type ReduxState = ReturnType<typeof reducers>;

export const initStore = () => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};
