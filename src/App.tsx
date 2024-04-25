import { FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

type Props = {};

const App = (props: Props) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  }, []);
  const AddList = useCallback(() => {}, []);

  console.log(todo);
  return (
    <>
      <GlobalStyle />
      <TodolistPage>
        <Container>
          <Title>TODOLIST </Title>
          <Wrapper>
            <TodoInputWrapper>
              <TodolistInput value={todo} onChange={onChange}></TodolistInput>
              <AddBtn onClick={AddList}>+</AddBtn>
            </TodoInputWrapper>
          </Wrapper>
        </Container>
      </TodolistPage>
    </>
  );
};

export default App;

const TodolistPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 10rem 30rem;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  background-color: #97cbeb;
  height: 100%;
  padding: 2rem 1rem 1rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 2rem;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
`;
const TodolistInput = styled.input`
  width: 100%;
  border: 1px solid #57abdf;
  padding: unset;
  height: 2rem;
`;
const AddBtn = styled.button`
  width: 2.5rem;
  padding: unset;
  background-color: #57abdf;
  color: white;
  border: unset;
  font-size: 1.6rem;
`;
const TodoInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
