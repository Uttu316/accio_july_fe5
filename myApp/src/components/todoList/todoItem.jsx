import {
  MdEdit as EditIcon,
  MdOutlineDeleteForever as DeleteIcon,
} from "react-icons/md";

const TodoItem = ({ onEdit, item, index, isEditMode, onDlt }) => {
  return (
    <li className="task_item">
      <p className="task_text">{item.task}</p>
      <div className="task_actions">
        <button
          onClick={() => onEdit(item, index)}
          disabled={isEditMode !== false}
          className="task_edit_btn"
        >
          <EditIcon />
        </button>
        <button
          disabled={isEditMode !== false}
          onClick={() => onDlt(item.id)}
          className="task_dlt_btn"
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
