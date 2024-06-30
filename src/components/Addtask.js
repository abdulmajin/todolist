import React, { useState } from "react";

export default function AddTask({ newtask, openadd, todos }) {
  const [taskname, settaskname] = useState("");
  const [todo, settodo] = useState("");

  let newtodo = {
    taskname,
    id: crypto.randomUUID(),
    todo,
    status: false,
  };

  function newtodHolder(e) {
    const findexist = todos.find(
      (find) => find.taskname.toLowerCase() === taskname.toLocaleLowerCase()
    );

    if (taskname === "") {
      alert("Please input the task name");
      return;
    }
    if (todo === "") {
      alert("Please input the task description");
      return;
    }

    findexist
      ? alert(`Tasked with name ${taskname} already exits`)
      : newtask(newtodo);

    openadd();
  }

  return (
    <>
      <div className="addcontainer">
        <div className="addtasktop">
          <p>Create a new task</p>
          <button className="togglec" onClick={openadd}>
            X
          </button>
        </div>

        <input
          type="text"
          placeholder="Task name"
          value={taskname}
          onChange={(e) => settaskname(e.target.value)}
          className="taskname"
        />
        <textarea
          className="addtextarea"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />

        <div className="addbtnaction">
          <button className="canclebtn" onClick={openadd}>
            cancel
          </button>
          <button className="savebtn" onClick={() => newtodHolder(newtask)}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
