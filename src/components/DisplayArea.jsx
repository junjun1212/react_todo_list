import { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";
import styled from "styled-components";

export const DisplayArea = ({ todoItem, index }) => {
  const { todoItems, setTodoItems } = useContext(TodoContext);

  const onClickEdit = (index) => {
    const newTodos = todoItems.map((todoitem, i) => {
      if (i === index) {
        return { ...todoitem, edit: !todoitem.edit, editedText: todoitem.text };
      }
      return todoitem;
    });
    setTodoItems(newTodos);
  };

  const onClickDelete = (index) => {
    if (window.confirm("本当によろしいですか？")) {
      const newTodos = [...todoItems];
      newTodos.splice(index, 1);
      setTodoItems(newTodos);
    }
  };

  return (
    <>
      <STodoItem style={chageTodoItemStyle(todoItem.completed)}>{todoItem.text}</STodoItem>
      <SButton onClick={() => onClickEdit(index)}>編集</SButton>
      <SDeleteButton onClick={() => onClickDelete(index)}>削除</SDeleteButton>
    </>
  );
};

const chageTodoItemStyle = (completed) => {
  return {
    color: completed ? "gray" : "black",
    textDecoration: completed ? "line-through" : "none",
  };
};

const STodoItem = styled.p`
  display: inline-block;
  width: 260px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 13px 0;
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

const SDeleteButton = styled.button`
margin: 0 5px;
border-radius: 10px;
border: none;
height: 25px;
width: 50px;
background-color:	#ff4d4f;
color: #FFFFFF;
&:hover {
  background-color: #FF0000;
  color: 	#FFFFFF;
  cursor: pointer;
`;
