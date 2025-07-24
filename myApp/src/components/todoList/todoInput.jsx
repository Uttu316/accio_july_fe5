const TodoInput = ({ isEditMode, value, onInput, onSave, onAdd }) => {
  return (
    <div className="todoList_inputContainer">
      <input
        placeholder="Write the task here..."
        onChange={onInput}
        value={value}
      />
      {isEditMode === false && (
        <button disabled={value.length < 3} onClick={onAdd}>
          Add
        </button>
      )}
      {isEditMode !== false && (
        <button disabled={value.length < 3} onClick={onSave}>
          Save
        </button>
      )}
    </div>
  );
};

export default TodoInput;
