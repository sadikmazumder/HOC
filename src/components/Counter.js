import React, { useState } from "react";

const Counter = (WrappedComponent, num) => {
  function Counter(props) {
    const [count, setCount] = useState(0);

    function increment() {
      setCount(count + num);
    }

    return (
      <div>
        <WrappedComponent count={count} increment={increment} />
      </div>
    );
  }
  return Counter;
};

export default Counter;
