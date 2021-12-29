import React, { useEffect } from "react";
import "./style.css";

function Dropdown(props) {
  //   const changeFilter = (e) => {
  //     if (e.target.value === "completed") {
  //       props.setfilter((prev) => {
  //         return { ...prev, filter: "completed" };
  //       });
  //     } else if (e.target.value === "incompleted") {
  //       props.setfilter((prev) => {
  //         return { ...prev, filter: "incompleted" };
  //       });
  //     }
  //     console.log(e.target.value);
  //     console.log(props.filter);
  //   };

  const changeFilter = (e) => {
    props.setfilter(e.target.value);
    props.filter(e.target.value)
  };

//   useEffect(()=>{
//       props.setfilter()
//   })

  return (
    <div className="dropdown">
      <select value={props.currentview} onChange={changeFilter}>
        <option name="all">all</option>
        <option name="completed">completed</option>
        <option name="incompleted">incompleted</option>
      </select>
    </div>
  );
}

export default Dropdown;
