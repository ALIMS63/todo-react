import { takeEvery, put, call } from 'redux-saga/effects';
import { SAGA_START } from './action-types';
import { addItem } from './actions';

async function handleSubmit(inputValue) {
  // event.preventDefault();
  const response = await fetch('api/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputValue
    }),
  });
  const json = await response.json();
  // dispatch(addItem(json.item));
}

function* worker(action) {
  const json = yield call(handleSubmit, action.payload.inputValue);
  yield put(addItem(json.item));

}

export default function* watcher() {
  yield takeEvery(SAGA_START, worker)
}
