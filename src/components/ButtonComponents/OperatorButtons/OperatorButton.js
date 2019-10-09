import React from "react";

const OperatorButton = props => {
  return (
    <button
      className="operator_button"
      onClick={() => props.setOperatorState(props.operatorValue)}
    >
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        props.operator
      }
    </button>
  );
};

export default OperatorButton;
