import { useContext, useState } from "react";
import TaskContext from "./TaskContext";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please Add Task");
      return;
    }
    addTask({ title });
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler} className="mb-2">
      <input
        className="p-2 rounded-md border  "
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 rounded-md border px-2 py-2 bg-green-500 font-bold text-black "
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
