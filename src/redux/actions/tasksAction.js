export const FETCH_TASK_SUCCESS = "FETCH_TASK_SUCCESS";
export const FETCH_TASK_FAIL = "FETCH_TASK_FAIL";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
export const CREATE_TASK_FAIL = "CREATE_TASK_FAIL";

const BASE_URL = "http://localhost:3000/api/v1";


export const fetchTasks = () => {
  const token = localStorage.getItem('token')
  return async (dispatch) => {
    // logic to fetch data
    const result = await fetch(`${BASE_URL}/stories`, {
      headers: {
        Authorization: token,
      },
    });

    const resultData = await result.json();

    if (!resultData || resultData == "unauthorized") {
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

export const createTask = ({
  summary,
  type,
  complexity,
  estimatedHrs,
  cost,
  description,
}) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}/stories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        summary,
        type,
        complexity,
        estimatedHrs,
        cost,
        description,
      }),
    });

    const responseData = await response.json();
    console.log(responseData)

    if (!responseData || responseData == "unauthorized") {
      dispatch({
        type: CREATE_TASK_FAIL,
      });
    } else {
      dispatch({
        type: CREATE_TASK_SUCCESS,
        payload: responseData,
      });
    }

    return responseData
  };
};
