export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

const BASE_URL = "http://localhost:3000/api/v1";

export const loginUser = (authData) => {
  const { email, password, isAdmin } = authData;

  return async (dispatch) => {
    // logic to make a post to LOGIN the user
    const result = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        isAdmin,
      }),
    });

    const resultData = await result.json();

    if (resultData.id) {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: resultData,
      });
    } else {
      dispatch({
        type: LOGIN_USER_FAIL,
      });
    }

    return resultData;
  };
};
