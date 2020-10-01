import {  SET_LIST, ADD_ITEM, SAGA_START } from "./action-types";


export function setList(list) {
  return {
    type: SET_LIST,
    payload: {
      list
    },
  }
}


export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: {
      item
    },
  }
}


export function sagaStart(inputValue) {
  return {
    type: SAGA_START,
    payload: {
      inputValue
    }
  }
}


// export function inputFieldSubmit(inputValue) {
//   return (async (dispatch) => {
//     const response = await fetch('api/add', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         inputValue
//       }),
//     });
//     const json = await response.json();
//     dispatch(addItem(json.item));
//   }
//   )
// }

export function ToDoUseEffect() {
  return async (dispatch) => {
    const response = await fetch('/api');
    const json = await response.json();

    dispatch(setList(json.tasks));
  }
}
