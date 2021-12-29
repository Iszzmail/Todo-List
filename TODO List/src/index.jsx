import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Input from "./Input";
import Dropdown from "./Dropdown";

let originalData = [];
function App(props) {
  const [task, SetTask] = useState([]);
  const [currentDropDown, SetcurrentDropDown] = useState("all");

  const completeTheTask = (index) => {
    originalData.forEach((e, i) => {
      if (i === index) {
        if (e.show === "okbutton") {
          e.show = "okbuttonStrike";
          e.isComplete = true;
        } else {
          e.show = "okbutton";
          e.isComplete = false;
        }
      }
    });

    filter(currentDropDown);
  };

  const updateOriginalData = (data) => {
    originalData = [...originalData, data];
    SetTask([...originalData]);
  };

  const filter = (state) => {
    if (state === "all") {
      SetTask([...originalData]);
    } else if (state === "completed") {
      SetTask(() => originalData.filter((e) => e.isComplete));
    } else {
      SetTask(() => originalData.filter((e) => !e.isComplete));
    }
  };
  console.log(originalData, 'ORIGINAL');
  console.log(task, 'TASK');
  return (
    <div>
      <h1 className="header">Todo List</h1>
      <Input task={task} updateOriginalData={updateOriginalData} />
      <span>
        {" "}
        <Dropdown
          filter={filter}
          setfilter={SetcurrentDropDown}
          currentview={currentDropDown}
        />{" "}
      </span>
      <div style={{ display: "block", borderTop: "10px " }}>
        {task.map((e, i) => {
          return (
            <div key={i} className={e.show}>
              <div>
                <span>{e.name}</span>
                <button onClick={() => completeTheTask(i)}>
                  {e.show === "okbutton" ? "Completed" : "incompleted"}
                </button>
                <button>delete</button>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
