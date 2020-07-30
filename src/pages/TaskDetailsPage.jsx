import React from "react";
import Header from "../components/Header";
import {useSelector, useDispatch} from 'react-redux';
import TaskDetails from '../components/TaskDetails'

const TaskDetailsPage = props => {
  const taskId = props.location.taskId;
  const task = useSelector(state => state.tasks.tasks.length > 0 ? state.tasks.tasks.find(task => task.id === taskId): []);
  return (
    <>
      <Header />
      <TaskDetails task={task}/>
    </>
  );
};

export default TaskDetailsPage;
