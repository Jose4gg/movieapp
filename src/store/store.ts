import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({});

export type AppState = ReturnType<typeof reducers>;

export const initStore = () => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};
