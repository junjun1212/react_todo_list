import React, { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [todoText, setTodoText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  return (
    <TodoContext.Provider value={{ todoText, setTodoText, todoItems, setTodoItems }}>{children}</TodoContext.Provider>
  );
};
