import React, { useState } from "react";

export default function Timer({ start }) {
  //let value = 20;
  //  [0] => data {store value}
  // [1]=> setter effected for VirtualDom
  let [value, setValue] = useState(+start || 0);
  let [bgColor, setBgColor] = useState("green");
  const plusValue = () => {
    // ++value; //not effected Virtual Dom
    // setValue(value + 1);
    ++value;
    setValue(value);
    // console.log(value);
  };

  const minusValue = () => {
    // ++value; //not effected Virtual Dom
    // setValue(value + 1);
    if (value < 0) {
      setBgColor("red");
    }
    --value;
    setValue(value);
    // console.log(value);
  };
  return (
    // <> </>
    // <React.Fragment>
    //   <h4>{new Date().toLocaleTimeString()}</h4>
    // </React.Fragment>

    <>
      <h3> Timer</h3>
      <p> Value: {value} </p>
      <button onClick={plusValue}>+</button>
      <button
        style={{ backgroundColor: bgColor, color: "white" }}
        onClick={minusValue}
      >
        -
      </button>
    </>
  );
}
//default props
Timer.defaultProps = { start: "0" };
