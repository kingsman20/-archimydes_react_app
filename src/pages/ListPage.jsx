import React, {useEffect} from "react";
import Header from "../components/Header";
import DataTable from '../components/DataTable';
import {useSelector, useDispatch} from 'react-redux';

import * as tasksAction from '../redux/actions/fetchTasksAction';

const ListPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tasksAction.fetchTasks())
    }, [dispatch]);

    const {tasks} = useSelector(state => state.tasks);
    console.log(tasks)

  return (
    <>
      <Header />
      <DataTable tasks={tasks}/>
    </>
  );
};

export default ListPage;
