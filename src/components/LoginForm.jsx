import React from "react";
import TextFieldGroup from "./common/TextFieldGroup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import "../styles/login.css";
import "../styles/toggle_button.css";

import * as authAction from "../redux/actions/authAction";

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        isAdmin: false,
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        dispatch(authAction.loginUser(values))
          .then((result) => {
            console.log(result);
            if(result.role == "Admin") {
              history.push("/lists")
            } else if(result.role == "user"){
              history.push("/create")
            } else {
              history.push("/notFound")
            }
          })
          .catch((err) => console.log(err));
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} className="login_form">
          <div className="input_item">
            <label>E-mail</label>
            <TextFieldGroup
              type="email"
              name="email"
              id="email"
              onChange={props.handleChange}
              value={props.values.email}
              onBlur={props.handleBlur}
              className="text_input"
              error={props.errors.email ? props.errors.email : null}
            />
          </div>
          <div className="input_item">
            <label>Password</label>
            <TextFieldGroup
              type="password"
              name="password"
              id="password"
              onChange={props.handleChange}
              value={props.values.password}
              onBlur={props.handleBlur}
              className="text_input"
              error={props.errors.password ? props.errors.password : null}
            />
          </div>
          <div className="input_item">
            <span>Admin?</span>
            <label className="switch">
              <input
                type="checkbox"
                value={props.values.isAdmin}
                name="isAdmin"
                onChange={props.handleChange}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <button type="submit" className="submit_btn">
            Log in
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
