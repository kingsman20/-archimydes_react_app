import React from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";
import "../styles/constants.css";

const DataTable = (props) => (
  <>
    <div className="container">
      <div className="card">
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Summary</th>
              <th>Type</th>
              <th>Complexity</th>
              <th>Cost</th>
              <th>Description</th>
              <th>Estimated Time for completion</th>
            </tr>
            {props.tasks && props.tasks.length > 0 ? (
              props.tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.id}</td>
                  <td>
                    {props.role && props.role == "Admin" ? (
                      <Link
                        to={{
                          pathname: "/details",
                          taskId: task.id,
                        }}
                      >
                        {task.summary}
                      </Link>
                    ) : (
                      task.summary
                    )}
                  </td>
                  <td>{task.type}</td>
                  <td>{task.complexity}</td>
                  <td>${task.cost}</td>
                  <td>{task.description}</td>
                  <td>{task.estimatedHrs}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>1</td>
                <td>Dummy Data</td>
                <td>Dummy Data</td>
                <td>Dummy Data</td>
                <td>$0</td>
                <td>Dummy Data</td>
                <td>Dummy Data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </>
);

export default DataTable;
