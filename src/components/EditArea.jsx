import { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";
import styled from "styled-components";

export const EditArea = ({ todoItem, index }) => {
  const { todoItems, setTodoItems } = useContext(TodoContext);

  const onChangeUpdateTodoText = (index, editedText) => {
    const newTodos = todoItems.map((todoitem, i) => {
      if (i === index) {
        return { ...todoitem, editedText: editedText };
      }
      return todoitem;
    });
    setTodoItems(newTodos);
  };

  const onClickUpdate = (index) => {
    const newTodos = todoItems.map((todoitem, i) => {
      if (i === index && todoitem.editedText !== "") {
        return { ...todoitem, text: todoitem.editedText, edit: false, editedText: "" };
      }
      return todoitem;
    });
    setTodoItems(newTodos);
  };

  const onClickCancel = (index) => {
    const newTodos = todoItems.map((todoitem, i) => {
      if (i === index) {
        return { ...todoitem, edit: !todoitem.edit, editedText: "" };
      }
      return todoitem;
    });
    setTodoItems(newTodos);
  };

  return (
    <>
      <SInput
        type="text"
        defaultValue={todoItem.text}
        onChange={(event) => onChangeUpdateTodoText(index, event.target.value)}
      />
      <SButton onClick={() => onClickUpdate(index)}>更新</SButton>
      <SButton onClick={() => onClickCancel(index)}>戻る</SButton>
    </>
  );
};

const SInput = styled.input`
  flex-grow: 1;
  border: none;
  height: 50px;
  font-size: 16px;
  padding: 0;
  &:focus {
    border: none;
    outline: none;
  }
`;

const SButton = styled.button`
  margin: 0 5px;
  border-radius: 10px;
  border: none;
  height: 25px;
  width: 50px;
  background-color:	#00BFFF;
  color: #FFFFFF;
  &:hover {
    background-color: #1E90FF;
    color: 	#FFFFFF;
    cursor: pointer;
`;
