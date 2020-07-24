import React from "react";

function TextBar(props) {
  return (
    <div>
      <input onChange={(e) => props.input(e)} />
      <button onClick={props.add}>Add</button>
    </div>
  );
}

export default TextBar;
