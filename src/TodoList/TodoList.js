import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    over-flow-y: auto;
`;

function TodoList () {
    const todos = useTodoState(); // state 조회하고 렌더링 해줘야함

    return (
        <TodoListBlock>TodoList
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;