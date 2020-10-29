import React from "react";
const Box = (props) => {
    return (
        <div className="btn" onClick={props.handleArr}>{props.value}</div>
    )
}
export default Box;