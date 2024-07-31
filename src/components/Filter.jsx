import React, { useContext, useState } from "react";
import TaskContext from "./TaskContext";

const Filter = () => {
  const { setFilter } = useContext(TaskContext);

  const selectHandler = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="flex justify-end align-center  mb-4  font-semibold  ">
      Filter:{" "}
      <select onChange={selectHandler} className="rounded-md w-32 ">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default Filter;
