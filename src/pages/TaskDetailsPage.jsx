import React from "react";
import Header from "../components/Header";
import TaskDetails from '../components/TaskDetails'

const TaskDetailsPage = props => {
console.log(props.location)
  return (
    <>
      <Header />
      <TaskDetails />
    </>
  );
};

export default TaskDetailsPage;
