import React from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";
import "../styles/constants.css";
import "../styles/details.css"
import "../styles/login.css"
import "../styles/create.css"

const CreateTask = () => (
  <div className="container">
    <div className="billing_card">
      <div className="billing_card_CreateTask">
        <h4>Create New Task</h4>
      </div>
      <div className="billing_card_body">
        <form className="login_form" action="list.html">
          <div className="row">
            <div className="col_50">
              <div className="input_item">
                <label>Username</label>
                <input type="text" className="text_input" />
              </div>
            </div>
            <div className="col_50">
              <div className="input_item">
                <label>E-mail</label>
                <input type="email" className="text_input" />
              </div>
            </div>
            <div className="col_50">
              <div className="input_item">
                <label>Password</label>
                <input type="password" className="text_input" />
              </div>
            </div>
            <div className="col_50">
              <div className="input_item">
                <label>Phone</label>
                <input type="text" className="text_input" />
              </div>
            </div>
          </div>
          <div className="input_item">
            <label>Text Area</label>
            <textarea className="text_area"></textarea>
          </div>
          <button type="submit" className="submit_btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default CreateTask;
