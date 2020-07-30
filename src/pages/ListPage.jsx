import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import DataTable from "../components/DataTable";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import * as tasksAction from "../redux/actions/tasksAction";

const ListPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [role, setRole] = useState(false);

  const checkTokenExist = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
    setRole(jwt_decode(token).role);
  };

  useEffect(() => {
    dispatch(tasksAction.fetchTasks());
    checkTokenExist();
  }, [dispatch]);

  const { tasks } = useSelector((state) => state.tasks);

  return (
    <>
      <Header />
      <div className="data_title container">
        <h4 href="#" className="text_black">
          All Tasks
        </h4>
        <div className="spacer"></div>
        <div className="search_input_container">
          <span className="icon_box">
            <i className="fas fa-search"></i>
          </span>
          <input type="text" className="search_input" placeholder="search" />
        </div>
        <select className="filter_input">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <DataTable tasks={tasks} role={role} />
    </>
  );
};

export default ListPage;
