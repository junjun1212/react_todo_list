import { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";

export const TaskCount = () => {
  const { todoItems } = useContext(TodoContext);
  const completedTodoItems = todoItems.filter((item) => item.completed).length;
  const uncompletedTodoItems = todoItems.length - completedTodoItems;

  return (
    <div>
      <p>
        全てのタスク: {todoItems.length} / 完了済み: {completedTodoItems} / 未完了: {uncompletedTodoItems}
      </p>
    </div>
  );
};
