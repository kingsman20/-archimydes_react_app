import {
    FETCH_TASK_SUCCESS,
    FETCH_TASK_FAIL,
  } from "../actions/fetchTasksAction";
  
  const initialState = {
    tasks: {},
    errors: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_TASK_SUCCESS:
        return {
          ...state,
          tasks: action.payload,
        };
      case FETCH_TASK_FAIL:
        return {
          ...state,
          errors: true,
        };
      default:
        return state;
    }
  }
  