import { useState } from "react";
import TodoInput from "./todoInput";
import TasksList from "./tasksList";
import "./todoList.css";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const onInput = (e) => {
    // console.log(e);
    const value = e.target.value;
    setValue(value);
  };
  const onAdd = () => {
    const newTask = {
      task: value,
      id: parseInt(Math.random() * 10000),
    };
    setTaskList((currTasks) => [newTask, ...currTasks]);
    setValue("");
  };
  const onSave = () => {
    const pos = isEditMode;
    setTaskList((currTasks) => {
      currTasks[pos] = { ...currTasks[pos], task: value };
      return currTasks;
    });
    setValue("");
    setIsEditMode(false);
  };

  return (
    <div className="todoList_container">
      <TodoInput
        isEditMode={isEditMode}
        value={value}
        onAdd={onAdd}
        onInput={onInput}
        onSave={onSave}
      />
      <TasksList
        isEditMode={isEditMode}
        list={taskList}
        setList={setTaskList}
        setIsEditMode={setIsEditMode}
        setValue={setValue}
      />
    </div>
  );
};

export default TodoList;
