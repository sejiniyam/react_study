import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    }
    .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    }
    .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    }
`;

function TodoHead () {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done); // 여기서는 done 값이 false인 항목의 개수를 보여줘야함

    // 날짜
    const today = new Date();
    const dayString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long'});

    return (
        <>
            <TodoHeadBlock>
                <h1>{dayString}</h1>
                <div className="day">{dayName}</div>
                <div className="tasks-left">할 일 {undoneTasks.length}개 남음~</div>
            </TodoHeadBlock>
        </>
    );
}

export default TodoHead;