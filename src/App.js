import React, { useEffect, useState } from "react";
import TodoList from "./Todos/TodoList";
import Context from "./context";
import AddTodos from "./Todos/AddTodos";
import Loader from "./Loader";
const App = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setdata(data);
          setloader(false);
        }, 2000);
      });
  }, []);
  const onToggle = (id) => {
    setdata(
      data.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };
  const remove = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };
  const onCreate = (value) => {
    setdata(
      data.concat({
        title: value,
        id: Date.now(),
        completed: false,
      })
    );
  };
  return (
    <Context.Provider value={{ remove }}>
      <div>
        <h1 style={{ textAlign: "center" }}>React Tutorial</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AddTodos onCreate={onCreate} />
        </div>

        {loader && <Loader />}

        {data.length ? (
          <TodoList data={data} onToggle={onToggle} />
        ) : loader ? null : (
          <p style={{ textAlign: "center" }}> No data</p>
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
