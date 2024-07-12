import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false
    }
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE' :
            return state.concat(action.todo);
        case 'TOGGLE' : // 수정
            return state.map(todo =>
                // todo.id === action.id 참이라면, todo 객체 모든 속성 복사한 후 /done 속성 값을 현재 값의 반대로 변경한 새 객체 생성
                // done 속성이 true였다면 false로, false였다면 true로 변경
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
        default :
            throw new Error('Unhandled action type: ${action.type}');
    }
}

const TodoStateContext = createContext(); // state 관리
const TodoDispatchContext = createContext(); // distpatch 관리
const TodoNextIdContext = createContext(); // nextId 값 관리 (고유 ID)

// 커스텀 훅을 사용하려면, 해당 컴포넌트들이 TodoProvider 컴포넌트 내부에 렌더링 되어있어야 한다.
// 이유는..? 
// Context의 provider 컴포넌트는 하위에 있는 컴포넌트들에게 context값을 제공하는데
// 해당 컴포넌트가 provider로 감싸져있지 않으면, useContext는 undefind를 반환하게 된다.
export function TodoProvider({ children }) {
    const [state, dispath] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispath}>
                <TodoNextIdContext.Provider value={nextId}>
                {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>    
    );
}

// 커스텀 훅 만들기
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error ('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error ('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error ('Cannot find TodoProvider');
    }
    return context;
}