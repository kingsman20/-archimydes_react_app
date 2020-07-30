import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import TextFieldGroup from "./common/TextFieldGroup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

import * as taskAction from "../redux/actions/tasksAction";

import "../styles/list.css";
import "../styles/constants.css";
import "../styles/details.css";
import "../styles/login.css";
import "../styles/create.css";

const formSchema = yup.object({
  summary: yup.string().required(),
  description: yup.string().required().min(10),
  type: yup.string().required(),
  complexity: yup.string().required(),
  estimatedHrs: yup.number().required(),
  cost: yup.number().required(),
});

const CreateTask = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  return (
    <Formik
      initialValues={{
        summary: "",
        description: "",
        type: "",
        complexity: "",
        estimatedHrs: 0,
        cost: 0,
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        dispatch(taskAction.createTask(values))
          .then((result) => {
            if(result) {
              console.log('here')
              history.push("/lists")
            }
          })
          .catch((err) => console.log(err));
      }}
    >
      {(props) => (
        <div className="container">
          <div className="task_card">
            <div className="task_card_CreateTask">
              <h4>Create New Task</h4>
            </div>
            <div className="task_card_body">
              <form className="login_form" onSubmit={props.handleSubmit}>
                <div className="row">
                  <div className="col_50">
                    <div className="input_item">
                      <label>Summary</label>
                      <TextFieldGroup
                        type="text"
                        name="summary"
                        id="summary"
                        onChange={props.handleChange}
                        value={props.values.summary}
                        onBlur={props.handleBlur}
                        className="text_input"
                        error={
                          props.errors.summary ? props.errors.summary : null
                        }
                      />
                    </div>
                  </div>
                  <div className="col_50">
                    <div className="input_item">
                      <label>Cost</label>
                      <TextFieldGroup
                        type="number"
                        name="cost"
                        id="cost"
                        onChange={props.handleChange}
                        value={props.values.cost}
                        onBlur={props.handleBlur}
                        className="text_input"
                        error={props.errors.cost ? props.errors.cost : null}
                      />
                    </div>
                  </div>
                  <div className="col_50">
                    <div className="input_item">
                      <label>Estimated hours of completion</label>
                      <TextFieldGroup
                        type="number"
                        name="estimatedHrs"
                        id="estimatedHrs"
                        onChange={props.handleChange}
                        value={props.values.estimated}
                        onBlur={props.handleBlur}
                        className="text_input"
                        error={
                          props.errors.estimatedHrs ? props.errors.estimatedHrs : null
                        }
                      />
                    </div>
                  </div>
                  <div className="col_50">
                    <div className="input_item">
                      <label>Complexity</label>
                      <select
                        name="complexity"
                        value={props.values.complexity}
                        onChange={props.handleChange}
                        className="text_input"
                      >
                        <option>---select---</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                      {props.touched.complexity && props.errors.complexity ? (
                        <span className="text-danger">
                          {props.errors.complexity}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="col_50">
                    <div className="input_item">
                      <label>Type</label>
                      <select
                        name="type"
                        value={props.values.type}
                        onChange={props.handleChange}
                        className="text_input"
                      >
                        <option>---select---</option>
                        <option value="enhancement">Enhancement</option>
                        <option value="bugfix">Bug Fix</option>
                        <option value="development">Development</option>
                        <option value="qa">QA</option>
                      </select>
                      {props.touched.complexity && props.errors.type ? (
                        <span className="text-danger">{props.errors.type}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col_50">
                  <div className="input_item">
                    <label>Description</label>
                    <textarea
                      name="description"
                      value={props.values.description}
                      onChange={props.handleChange}
                      className="text_area"
                    ></textarea>
                    {props.touched.complexity && props.errors.description ? (
                      <span className="text-danger">
                        {props.errors.description}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="col_50">
                  <button type="submit" className="submit_btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default CreateTask;
