import React from "react";
import Counter from "./Counter";

function B(props) {
  const { count, increment } = props;

  return (
    <div>
      <button onMouseOver={increment}> Mouseover </button> {count}
    </div>
  );
}

export default Counter(B, 2);
