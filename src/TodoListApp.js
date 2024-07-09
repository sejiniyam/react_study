import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./TodoList/TodoTemplate";
import TodoHead from "./TodoList/TodoHead";
import TodoList from "./TodoList/TodoList";
import TodoCreate from "./TodoList/ToCreate";

// 배경 회색
const GlobalStyle = createGlobalStyle`
    body {
        background : #e9ecef; 
    }
`;

function TodoListApp() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </>
    );
}

export default TodoListApp;