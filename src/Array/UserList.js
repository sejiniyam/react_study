import React, { useContext } from "react";
import { UserDispatch } from "../Status";

const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
                }}
                onClick={() => {
                    dispatch({ type : 'TOGGLE_USER', id : user.id });
                }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => {
                dispatch({ type: 'REMOVE_USER', id: user.id });
            }}>삭제</button>
        </div>
    );
});

// UserList 컴포넌트 역할 : onToggle, onRemove를 전달하기 위한 중간 다리 역할
function UserList({ users }) {
    return (
        <>
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> 이랬는데*/}
            {users.map(user => (
                <User user = {user} key={user.id}/>
            ))} {/*요래됐심더*/}
        </>
    );
}

export default React.memo(UserList);