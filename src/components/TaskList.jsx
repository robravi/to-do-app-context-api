import { useContext } from "react";
import TaskContext from "./TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="mb-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
