import React from "react";

const Child = React.memo((props) => {
  console.log("child component re rendered");
  return (
    <div>
      <button onClick={props.fun}>{props.button_name}</button>
    </div>
  );
});

export default Child;
//wrapping the component with React.memo will only allow the component to
// re render only when there is a change in props

//if function as a prop to the component that will not stop from re rendering
