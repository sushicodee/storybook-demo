import React from "react";
import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter({
    initailCount: 0,
    step: 2,
  });
  return (
    <div>
      <button data-testid="decrement" onClick={decrement}>
        -
      </button>
      <p data-testid='count'>{`${count}`}</p>
      <button data-testid="increment" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
