import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer, listReducer } from './reducers.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import Saga from 'redux-saga';
import { all } from 'redux-saga/effects';
import ToDoSaga from './ToDo-saga';

const sagaMiddleware = Saga();

const preloadedState = window.localStorage.getItem('redux') || '{}';

const store = createStore(
  combineReducers({
    list: listReducer
  }),
  preloadedState,
  composeWithDevTools(
    applyMiddleware(reduxThunk, sagaMiddleware)
  )
);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});

sagaMiddleware.run(
  function* () {
    yield all([
      ToDoSaga()
    ])
  }
);



export default store;
