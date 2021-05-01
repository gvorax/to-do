import React, { useState } from "react";
const useInputValue = (defaultValue = "") => {
  const [value, setvalue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setvalue(event.target.value),
    },
    clear: () => setvalue(""),
    value: () => value,
  };
};

const AddTodos = ({ onCreate }) => {
  const input = useInputValue("");
  const submit = (event) => {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  };
  return (
    <form onSubmit={submit}>
      <input {...input.bind} />
      <button>Add item</button>
    </form>
  );
};

export default AddTodos;
