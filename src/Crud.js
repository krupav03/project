import React, { useState } from "react";

const Crud = () => {
  const [todoList, setTodoList] = useState([]);
  // inital value will be an empty array

  const [newTask, setNewTask] = useState("");
  // state that represent input value

  const changeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  // if (task === taskName) {
  //   return false;
  // } else {
  //   return true;
  // }

  return (
    <center>
      <div
        style={{
          color: "black",
          backgroundColor: "#BCCEF8",
          height: 800,
          width: 800,
          fontWeight: "bold",
          fontSize: 28,
          fontFamily: "sans-serif",
        }}
      >
        {" "}
        <center>Create List</center>
        <div>
          <input
            onChange={changeHandler}
            style={{ borderRadius: 10, borderWidth: 3, borderColor: "black" }}
          />{" "}
          &nbsp;
          {/* whenever we type the value in the input it updates the value of newTask */}
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 10,
            }}
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <div className="List">
          {todoList.map((task) => {
            return (
              <div>
                <h1 style={{ color: "black" }}>{task}</h1>
                <button
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={() => deleteTask(task.id)}
                >
                  X{" "}
                </button>
              </div>
            );
          })}
          {/* when we add a new task it will loop through the array and goes to the task and puts the name of the task in h1 tag */}
        </div>
      </div>
    </center>
  );
};

export default Crud;
