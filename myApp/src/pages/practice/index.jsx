import { useState } from "react";
import Counter from "../../components/counter";
import StopWatch from "../../components/stopwatch";
import TodoList from "../../components/todoList";

const PracticePage = () => {
  const [showStopWatch, setStopWatch] = useState(false);
  return (
    <div>
      <Counter />
      <TodoList />
      <div className="stop-watch-wrapper">
        <button
          className="stop-watch-toggle-btn"
          onClick={() => setStopWatch(!showStopWatch)}
        >
          {showStopWatch ? "Hide Watch" : "Show Watch"}
        </button>
        {showStopWatch && <StopWatch />}
      </div>
    </div>
  );
};
export default PracticePage;
