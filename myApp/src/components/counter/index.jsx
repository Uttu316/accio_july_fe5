import { useState } from "react";
import "./counter.css";

const Counter = () => {
  // let count = 0
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1); //async
    setCount(count + 1);

    setCount(count + 1);
    setCount(count + 1);
    setCount((currCount) => currCount + 1);
    // count= count+1
    console.log(count);
  };

  const onMinus = () => {
    // setCount(count - 1);
    setCount((currCount) => currCount - 1);
    // setCount((currCount) => currCount - 1);
    // setCount((currCount) => currCount - 1);
    console.log(count);
  };
  return (
    <div className="counter_container">
      <h2 className="counter_value">{count}</h2>
      <div className="counter_actions">
        <button className="counter_add" onClick={onAdd}>
          Add+
        </button>
        <button className="counter_minus" onClick={onMinus}>
          Minus-
        </button>
      </div>
    </div>
  );
};
export default Counter;
