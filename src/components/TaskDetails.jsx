import React from "react";
import "../styles/list.css"
import "../styles/details.css"
import "../styles/constants.css"

const TaskDetails = () => {
  return (
    <div className="container">
        <div className="billing_card">
            <div className="billing_card_header">
                <h4>Billing</h4>
            </div>
            <div className="billing_card_body">
                <h4>About this step (10 Min)</h4>
                <p>
                    You will be adding a credit card that we will bw billing on a monthly basis. This section will also be where you will be able to see your pament history, count of users and number of active phone numbers as you use the platform
                </p>
                <h4>Whats's Required</h4>
                <p>
                    The credit card you like to store on file. We accept all credit card type.
                </p>

                <h4><i className="far fa-lightbulb"></i> Learn More</h4>
                <p>
                    We bill based on the number of active technician you have on the platform. You will quickly be able to view the number of techs you are being bill for here.
                </p>
                <p className="text_cente">
                    <a className="btn btn_primary">Complete</a>
                </p>
            </div>

        </div>
    </div>
  );
};

export default TaskDetails;
