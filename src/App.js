import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Todolist from "./components/Todolist";
import AddTask from "./components/Addtask";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([]);
  const [issadd, setAdd] = useState(false);
  const [done, setdone] = useState(false);
  const [notDone, setNotdone] = useState(true);
  const [searchbox, setsearch] = useState("");

  function searchb(e) {
    setsearch(e.target.value);
  }

  const openadd = () => {
    setAdd(!issadd);
    setNotdone(false);
    setdone(false);
  };
  const doneDisplay = () => {
    setdone(true);
    setNotdone(false);
  };

  const undone = () => {
    setNotdone(true);
    setdone(false);
  };

  function newtask(newtodo) {
    setTodo((item) => [...item, newtodo]);
    setAdd(false);
  }

  function handleDelete(id) {
    setTodo((item) => item.filter((item) => item.id !== id));
  }
  function handleStatus(id) {
    setTodo((todo) =>
      todo.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  }

  return (
    <div className="App">
      <nav className="nav">
        <Nav doneDisplay={doneDisplay} undone={undone} done={done} />
      </nav>
      <main className="mainContainer">
        <Header isDone={done} notDone={notDone} issadd={issadd} />
        <Search openadd={openadd} searchb={searchb} searchbox={searchbox} />
        {issadd ? (
          <AddTask newtask={newtask} openadd={openadd} todos={todos} />
        ) : (
          <Todolist
            searchbox={searchbox}
            todos={todos}
            handleDelete={handleDelete}
            handleStatus={handleStatus}
            isDone={done}
          />
        )}
        <hr></hr>
      </main>
    </div>
  );
}

export default App;
