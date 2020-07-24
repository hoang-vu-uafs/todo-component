import React from "react";

function Header(props) {
  return (
    <div>
      <label>Number of tasks: {props.leng}</label>
      <div>Finished tasks: {props.check}</div>
    </div>
  );
}

export default Header;
