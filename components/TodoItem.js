import { React, useState } from "react";
import styles from "/sass/Home.module.css";

function TodoItem() {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = () => {};

  const handlecheck = async () => {};

  return function TodoItem({ todo }) {
    {
      data &&
        data.map(todo => <TodoItem key={todo.ref["@ref"].id} todo={todo} />);
    }
    return (
      <div>
        <span className={styles.eachtodo}>
          <p className={styles.text}>{todo.data.task}</p>
          <div>
            <input
              type="checkbox"
              className={styles.toggle}
              defaultChecked={todo.data.done}
              onChange={handlecheck}
              onClick={() => setIsChecked(!isChecked)}
            />
            <button onClick={handleDelete}>Delete</button>
          </div>
        </span>
      </div>
    );
  };
}
export default TodoItem;
