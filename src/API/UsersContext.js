import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";

// UsersContext에서 사용할 기본 상태
const initialState = {
    users : {
        loading : false,
        data : null,
        error : null
    },
    user : {
        loading : false,
        data : null,
        error : null
    }
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
    loading : true,
    data : null,
    error : null
};

// 성공했을 떄의 상태 만들어주는 함수
const success = data => ({
    loading : false,
    data,
    error : null
});

// 실패했을 떄의 상태 만들어주는 함수
const error = error => ({
    loading : false,
    data : null,
    error : error
});

// 위에서 만든 객체와 유틸 함수들을 사용해서 리듀서를 작성한다
function usersReducer(state, action) {
    switch (action.type) {
        case 'GET_USERS' :
            return {
                ...state,
                users : loadingState
            };
        case 'GET_USERS_SUCCESS' :
            return {
                ...state,
                users : success(action.data)
            };
        case 'GET_USERS_ERROR' :
            return {
                ...state,
                users : error(action.error)
            };
        case 'GET_USER' :
            return {
                ...state,
                user : loadingState
            };
        case 'GET_USER_SUCCESS' :
            return {
                ...state,
                user : success(action.data)
            };
        case 'GET_USER_ERROR' :
            return {
                ...state,
                user : error(action.error)
            };
        default :
            throw new Error(`Unhanded action type: ${action.type}`);
    }
}

// state용 context와 / dispatch용 context 따로 만들어주기
// 왜 따로 만들어줄까유?
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// 위에서 선언한 두가지 context들의 provider를 감싸주는 컴포넌트
export function UsersProvider({ children }) {
    const [ state, dispatch ] = useReducer(usersReducer, initialState);
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}

// state를 쉽게 조회할 수 있게 해주는 커스텀 HOOK!!
export function useUsersState() {
    const state = useContext(UsersStateContext);
    if (!state) {
        throw new Error('Cannot find UsersProvider');
    }
    return state;
}

// dispatch를 쉽게 조회할 수 있게 해주는 커스텀 HOOK!!
export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find UsersProvider');
    }
    return dispatch;
}

// 여기서부턴 api 처리 함수~
export async function getUsers(dispatch) {
    dispatch({ type : 'GET_USERS' });
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        dispatch({ type : 'GET_USERS_SUCCESS', data : response.data });
    } catch (e) {
        dispatch({ type : 'GET_USERS_ERROR', error : e });
    }
}

export async function getUser(dispatch, id) {
    dispatch({ type : 'GET_USER' });
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        dispatch({ type : 'GET_USER_SUCCESS', data : response.data });
    } catch (e) {
        dispatch({ type : 'GET_USER_ERROR', error : e });
    }
}