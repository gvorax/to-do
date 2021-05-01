import React from "react";
import TodoListItem from "./TodoListitem";
const TodoList = (props) => {
  const style = {
    ul: {
      listStyle: "none",
    },
  };
  return (
    <div>
      <ul style={style.ul}>
        {props.data.map((data, index) => {
          return (
            <TodoListItem
              data={data}
              key={data.id}
              index={index}
              onChange={props.onToggle}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
