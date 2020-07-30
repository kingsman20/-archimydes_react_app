export const FETCH_TASK_SUCCESS = "FETCH_TASK_SUCCESS";
export const FETCH_TASK_FAIL = "FETCH_TASK_FAIL";

const BASE_URL = "http://localhost:3000";

export const fetchTasks = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiR3JpZmZpbiIsImxhc3ROYW1lIjoiUmVldmVzIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNTk2MDg4MjA5fQ.FnYrz9uAZE-afRu_Z29RkwnYqpvM4lwq7N9oVMyzIUE";

  return async (dispatch) => {
    // logic to fetch data
    const result = await fetch(`${BASE_URL}/api/v1/stories`, {
      headers: {
        Authorization: token,
      },
    });

    const resultData = await result.json();

    if (resultData === "Unauthorized") {
      dispatch({
        type: FETCH_TASK_FAIL,
      });
    } else {
      dispatch({
        type: FETCH_TASK_SUCCESS,
        payload: resultData,
      });
    }
  };
};
