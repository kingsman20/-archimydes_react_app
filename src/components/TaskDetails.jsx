import React from "react";
import "../styles/list.css";
import "../styles/details.css";
import "../styles/constants.css";

const TaskDetails = (props) => {
  console.log(props.task);
  return (
    <>
      {props.task.length != 0 ? (
        <div className="container">
          <div className="task_card">
            <div className="task_card_header">
              <h4>{props.task.summary}</h4>
            </div>
            <div className="task_card_body">
              <p>
                <span className="text_bold">Description</span> <br/>
                <span>{props.task.description}</span>
              </p>
              <p>
                <span className="text_bold">Type: </span>
                <span>{props.task.type}</span>
              </p>
              <p>
                <span className="text_bold">Complexity: </span>
                <span>{props.task.complexity}</span>
              </p>
              <p>
                <span className="text_bold">Estimated time of completion: </span>
                <span>{props.task.estimatedHrs}</span>
              </p>
              <p>
                <span className="text_bold">Cost: </span>
                <span>{props.task.cost}</span>
              </p>
              {/* <p>
                <span className="text_bold">Status: </span>
                <span>{props.task.complexity}</span>
              </p> */}
              <p className="text_cente">
                <a className="btn btn_primary">Reject</a>
                &nbsp;&nbsp;&nbsp;<a className="btn btn_primary">Accept</a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>No Task selected</div>
      )}
    </>
  );
};

export default TaskDetails;
