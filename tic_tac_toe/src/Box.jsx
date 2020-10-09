import React from "react";
const Box = (props) => {
    return (
        <button className="btn" onClick={props.handleArr}>{props.value}</button>
    )
}
export default Box;