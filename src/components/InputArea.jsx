import { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";
import styled from "styled-components";

export const InputArea = () => {
  const { todoText, setTodoText, todoItems, setTodoItems } = useContext(TodoContext);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...todoItems, { text: todoText, completed: false, edit: false, editedText: "" }];
    setTodoItems(newTodos);
    setTodoText("");
  };

  return (
    <SInputArea>
      <SInput type="text" placeholder="タスクを入力してください" value={todoText} onChange={onChangeTodoText} />
      <SButton onClick={onClickAdd}>保存</SButton>
    </SInputArea>
  );
};

const SInputArea = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 50px;
`;

const SInput = styled.input`
  flex-grow: 1;
  margin-left: 18px;
  border: none;
  height: 50px;
  font-size: 16px;
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
