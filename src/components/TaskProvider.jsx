import { useEffect, useState } from "react";
import TaskContext from "./TaskContext";
import propTypes from "prop-types";
import axios from "axios";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3001/todos");
        const formattedTasks = response.data.map((task) => ({
          id: task.id,
          title: task.title,
          completed: task.completed,
          dateTime: new Date().toLocaleString(),
        }));
        setTasks(formattedTasks);
      };
      fetchData();
    } catch (error) {
      console.log("error fteching Data", error);
    }
  }, []);

  const addTask = async (task) => {
    try {
      const response = await axios.post("http://localhost:3001/todos", {
        title: task.title,
        // completed: false,
      });
      setTasks([
        ...tasks,
        {
          id: response.data.id,
          title: task.title,
          completed: false,
          dateTime: new Date().toLocaleString(),
        },
      ]);
    } catch (error) {
      console.log("error Adding Task", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log("error deleting Task", error);
    }
  };
  const toggleTask = async (id) => {
    const upDatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(upDatedTasks);
  };

  const editTask = async (id, newText) => {
    try {
      const upDatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, title: newText } : task
      );
      setTasks(upDatedTasks);
      await axios.patch(`http://localhost:3001/todos/${id}`, {
        title: newText,
      });
    } catch (error) {
      console.log("Error Editing Task", error);
    } finally {
      console.log("error detected");
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
TaskProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default TaskProvider;
