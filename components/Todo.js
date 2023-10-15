import { React, useEffect, useState } from "react";
import styles from "/sass/Home.module.css";
import TodoItem from "/components/TodoItem";
import deleteData from "../pages/api/deleteData";

function Todo() {
  // ...
  const [newtodo, setnewtodo] = useState("");
  const handleinput = e => {
    setnewtodo(e.target.value);
  };
  const HandleSubmit = e => {
    console.log(newtodo);
  };

  const [isChecked, setIsChecked] = useState(false);
  const [done, isDone] = useState(true);
  const [aDelete, isDeleted] = useState("");
  const [inputData, setInputData] = useState({});
  let d = "";

  const handlecheck = async () => {
    isDone(!todo.data.done);
    let c = !todo.data.done;
    isDeleted(todo.ref["@ref"].id);
    d = todo.ref["@ref"].id;
    let g = {
      ...inputData,
      done: c,
    };
    await fetch("../api/updateData", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ data: g, id: d }),
    })
      .then(() => deleteData())
      .catch(e => console.log(e));
  };

  const handleDelete = () => {
    d = todo.ref["@ref"].id;
    isDeleted(todo.ref["@ref"].id);
    deleteItem();
  };

  async function deleteItem() {
    await fetch("../api/deleteData", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ id: d }),
    })
      .then(() => deleteData())
      .catch(e => console.log(e));
  }
  return (
    <div className={styles.maincont}>
      <h1>Todo App</h1>
      <div className={styles.newtodo}>
        <h3>Add new todo</h3>
        <div className={styles.semi}>
          <input
            type="text"
            value={newtodo}
            onChange={e => handleinput(e)}
          ></input>
          <button onClick={() => HandleSubmit()}>Add Todo</button>
        </div>
      </div>
      <div>
        <TodoItem />
      </div>
    </div>
  );
}
export default Todo;
