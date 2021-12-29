import React, { useState } from "react";
import "./style.css";

function Input(props) {
  const [getTaskName, SetGetTaskName] = useState();

  const taskName = (e) => {
    SetGetTaskName({
      ...getTaskName,
      name: e.target.value,
      show: "okbutton",
      isComplete: false,
    });
  };

  const AddTasktoList = () => {
    props.updateOriginalData(getTaskName);
  };

  return (
    <div>
      <input onChange={taskName} className="inputarea"></input>
      <button onClick={AddTasktoList} className="plus"></button>
    </div>
  );
}

export default Input;
