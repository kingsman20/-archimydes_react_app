import React from "react";
import LoginPage from "./pages/LoginPage";
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ListPage from './pages/ListPage';
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/lists" component={ListPage} exact/>
        <Route path="/create" component={CreateTaskPage} exact/>
        <Route path="/details" component={TaskDetailsPage} exact/>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
