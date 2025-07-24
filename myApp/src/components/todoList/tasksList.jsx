import TodoItem from "./todoItem";

const TasksList = ({ list, setValue, setList, isEditMode, setIsEditMode }) => {
  const isEmpty = list.length === 0;

  const onDlt = (id) => {
    setList((currList) => {
      let newList = currList.filter((i) => i.id !== id);
      return newList;
    });
  };
  const onEdit = (item, index) => {
    setIsEditMode(index);
    setValue(item.task);
  };
  return (
    <div className="taskslist_container">
      {isEmpty && <p className="taskList_msg">No Task Avaialable</p>}
      {!isEmpty && (
        <ul>
          {list.map((item, index) => (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              onDlt={onDlt}
              onEdit={onEdit}
              isEditMode={isEditMode}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default TasksList;
