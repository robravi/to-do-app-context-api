import { useContext, useState } from "react";
import TaskContext from "./TaskContext";
import propTypes from "prop-types";

const Task = ({ task }) => {
  const { toggleTask, deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setisEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);

  const handleEdit = () => {
    setisEditing(true);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleSaveEDit = () => {
    editTask(task.id, editedText);
    setisEditing(false);
  };

  const handleCancelEdit = () => {
    setisEditing(false);
    setEditedText(task.title);
  };

  return (
    <div className="mb-1 gap-x-2 p-2 brightness-150  backdrop-blur-sm  flex justify-start  text-black text-sm font-bold border-current border-solid border-red shadow-2xl shadow-zinc-900  capitalize rounded-md">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="mr-1"
      />

      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border p-2 mr-2 rounded-md"
          />
          <button
            onClick={handleSaveEDit}
            className="px-2 py-2  bg-green-500 border rounded-md"
          >
            Save
          </button>
          <button
            onClick={handleCancelEdit}
            className="px-2 py-2  bg-red-500 border rounded-md "
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex  ">
          <div className="flex w-96 align-center ">
            <span className={task.completed ? "line-through" : ""}>
              {task.title}
              <br />
              {task.dateTime}
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleEdit}
              className="  px-4 bg-yellow-500   rounded-md py-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 rounded-md   py-2 px-2 ml-1"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Task.propTypes = {
  task: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    completed: propTypes.bool,
    dateTime: propTypes.string.isRequired,
  }).isRequired,
};

export default Task;
