import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import DataTable from '../components/DataTable';
import {useSelector, useDispatch} from 'react-redux';
import jwt_decode from 'jwt-decode';

import * as tasksAction from '../redux/actions/tasksAction';

const ListPage = () => {
  let history = useHistory();
    const dispatch = useDispatch();

    const checkTokenExist = () => {
      const token = localStorage.getItem('token');
      if(!token) {
        history.push('/login')
      }
    }

    useEffect(() => {
        dispatch(tasksAction.fetchTasks())
        checkTokenExist()
    }, [dispatch]);

    const {tasks} = useSelector(state => state.tasks);

  return (
    <>
      <Header />
      <DataTable tasks={tasks}/>
    </>
  );
};

export default ListPage;
