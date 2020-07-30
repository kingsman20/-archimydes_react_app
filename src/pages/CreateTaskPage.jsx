import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import CreateTask from "../components/CreateTask";

const CreateTaskPage = () => {
  let history = useHistory();

  const checkTokenExist = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
  };

  useEffect(() => {
    checkTokenExist();
  });

  return (
    <>
      <Header />
      <CreateTask />
    </>
  );
};

export default CreateTaskPage;
