import { useContext, useState } from "react";
import TaskContext from "./TaskContext";

const AddTask = () => {
  const { addTask, loading } = useContext(TaskContext);
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
  if (loading) {
    <div>.....Adding Task</div>;
  }

  return (
    <form
      onSubmit={submitHandler}
      className="mb-2 flex justify-left align-center    "
    >
      <input
        className="p-2 rounded-md border  w-full   "
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 rounded-md border px-2 py-2 bg-green-500 font-bold text-black w-28 "
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
