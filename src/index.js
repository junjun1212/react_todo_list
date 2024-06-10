import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo";
import { TodoProvider } from "./providers/TodoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <Todo />
    </TodoProvider>
  </React.StrictMode>
);
