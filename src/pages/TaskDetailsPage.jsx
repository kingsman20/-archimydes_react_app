import React, {useEffect} from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
import TaskDetails from '../components/TaskDetails'

const TaskDetailsPage = props => {

  let history = useHistory();

  const checkTokenExist = () => {
    const token = localStorage.getItem('token');
    if(!token) {
      history.push('/login')
    }
  }

  useEffect(() => {
    checkTokenExist()
  })

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
