import React, { useContext } from "react";
import Context from "../context";

const TodoListItem = ({ data, index, onChange }) => {
  const { remove } = useContext(Context);
  const classes = [];
  if (data.completed) {
    classes.push("done");
  }

  return (
    <li className="li-item">
      <span className={classes.join("")}>
        <input
          type="checkbox"
          checked={data.completed}
          onChange={() => onChange(data.id)}
          className="input"
        />
        &nbsp;
        <b>{index + 1}</b> &nbsp;
        {data.title}
      </span>

      <button className="btn" onClick={remove.bind(null, data.id)}>
        &times;{" "}
      </button>
    </li>
  );
};
export default TodoListItem;
