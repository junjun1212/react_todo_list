import React from "react";
import { TodosArea } from "./components/TodosArea";
import { TaskCount } from "./components/TaskCount";
import { InputArea } from "./components/InputArea";
import { styled } from "styled-components";

const Todo = () => {
  return (
    <SContainer>
      <h1>TODOリスト</h1>
      <TaskCount />
      <InputArea />
      <TodosArea />
    </SContainer>
  );
};

export default Todo;

const SContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
`;
