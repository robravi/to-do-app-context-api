// src/App.js

import TaskProvider from "./components/TaskProvider";

import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";

function App() {
  return (
    <TaskProvider>
      <div className="container brightness-150 bg-red-950 border-2 border-solid border-orange-900 shadow-2xl shadow-orange-900  w-3/6  rounded-md   mx-auto p-4">
        <h1 className="text-3xl font-bold    ">To-Do List</h1>
        <Filter />
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
