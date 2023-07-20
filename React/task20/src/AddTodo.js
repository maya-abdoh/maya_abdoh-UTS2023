import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;

