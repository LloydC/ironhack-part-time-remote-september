import React from "react";
 
function Summary(props) {
  console.log('summary props', props)
    const tasksCompleted = props.tasksCompleted;
    // const { tasksCompleted } = props;
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{tasksCompleted}</p>
    </div>
  );
}
 
export default Summary;