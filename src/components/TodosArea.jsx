import { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";
import { EditArea } from "./EditArea";
import { DisplayArea } from "./DisplayArea";
import styled from "styled-components";

export const TodosArea = () => {
  const { todoItems, setTodoItems } = useContext(TodoContext);

  const onSwitchComplete = (index) => {
    const newTodos = todoItems.map((todoitem, i) => {
      if (i === index) {
        return { ...todoitem, completed: !todoitem.completed };
      }
      return todoitem;
    });
    setTodoItems(newTodos);
  };

  return (
    <STodosArea>
      <SUl>
        {todoItems.map((todoItem, index) => {
          return (
            <li key={index}>
              <STodoItems>
                <input type="checkbox" checked={todoItem.completed} onChange={() => onSwitchComplete(index)} />
                {todoItem.edit ? (
                  <EditArea todoItem={todoItem} index={index} />
                ) : (
                  <DisplayArea todoItem={todoItem} index={index} />
                )}
              </STodoItems>
            </li>
          );
        })}
      </SUl>
    </STodosArea>
  );
};

const STodosArea = styled.div`
  width: 400px;
`;

const SUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const STodoItems = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;
