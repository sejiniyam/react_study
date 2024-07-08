import React, { useReducer, useMemo } from "react";
// import Counter from "./Counter";
// import InputSample from "./InputSample";
import UserList from "./Array/UserList";
import CreateUser from "./Array/CreateUser";
import { produce } from "immer";

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = { // 초기 상태 정의
    users : [
        {
            id : 1,
            username : 'velopert',
            email : 'public.velopert@gmail.com',
            active : true
        },
        {
            id : 2,
            username : 'tester',
            email : 'tester@example.com',
            active : false
        },
        {
            id : 3,
            username : 'sejin',
            email : 'sejin@gmail.com',
            active : false
        }
    ]
};

function reducer(state, action) { // 상태 업데이트 
    switch (action.type) {
        case 'CREATE_USER':
          return produce(state, draft => {
            draft.users.push(action.user);
          });
            // return {
            //   users: state.users.concat(action.user)
            // };
          case 'TOGGLE_USER':
            return produce (state, draft => {
              const user = draft.users.find(user => user.id === action.id);
              user.active = !user.active;
            });
            // return {
            //   users: state.users.map(user =>
            //     user.id === action.id ? { ...user, active: !user.active } : user
            //   )
            // };
          case 'REMOVE_USER':
            return produce(state, draft => {
              const index = draft.users.findIndex(user => user.id === action.id);
              draft.users.splice(index, 1);
            });
            // return {
            //   users: state.users.filter(user => user.id !== action.id)
            // };
          default:
            return state;
    }
}

// UserDispatch 라는 이름으로 내보낸다.
export const UserDispatch = React.createContext(null);

// 1장 7~21
function Status() {
    // useInputs 훅을 사용하여 입력 폼의 상태를 관리한다.
    // const [{ username, email }, onChange, onReset] = useInputs({
    //     username : '',
    //     email: ''
    // });

    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;

    // const onCreate = useCallback(() => {
    //     dispatch({
    //         type : 'CREATE_USER',
    //         user : {
    //             id : nextId.current,
    //             username,
    //             email
    //         }
    //     });
    //     onReset();
    //     nextId.current += 1;
    // }, [username, email, onReset]); // 의존 값이 들어있는 배열(deps)

    // const onRemove = useCallback(id => {
    //     dispatch({
    //       type: 'REMOVE_USER',
    //       id
    //     });
    //   }, []); // deps가 비어있는 경우, 컴포넌트가 사라질 때 cleanup 함수가 호출된다.

    // const onToggle = useCallback(id => {
    //     dispatch({
    //       type: 'TOGGLE_USER',
    //       id
    //     });
    // }, []); // deps가 비어있는 경우, 컴포넌트가 사라질 때 cleanup 함수가 호출된다.

    // useMemo를 통해서 users 배열이 변경될 때만 재계산한다.
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            {/* <Counter /> <br /> */}
            {/* <InputSample /> */}
            <UserList users={users}/>
            <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
        </>
    );
}

export default Status;