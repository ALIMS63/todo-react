import { SET_LIST, ADD_ITEM } from "./action-types";


export function listReducer(state = [], action) {
  switch (action.type) {
    case SET_LIST:
      return action.payload.list;
    case ADD_ITEM:
      return [
        ...state,
        action.payload.item
      ]
    default:
      return state;
  }
}
