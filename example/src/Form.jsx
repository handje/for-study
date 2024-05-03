import React from "react";

const Form = (props) => {
  return (
    <div>
      <input
        type="number"
        value={props.value}
        min={1990}
        max={2024}
        onChange={props.onChange}
      />
      <button onClick={props.onClick}>ok</button>
    </div>
  );
};

export default Form;
