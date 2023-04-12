import React from "react";
import Counter from "./Counter";

function A(props) {
  const { count, increment } = props;
  return (
    <div>
      <button onClick={increment}> Onclick </button> {count}
    </div>
  );
}

export default Counter(A, 5);
