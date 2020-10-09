import React from "react";

const Reset = (props) => {
  return (
    <button className="reset" onClick={props.resetBoard}>
      Reset Game
    </button>
  );
};
export default Reset;
