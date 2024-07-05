import React, { useRef, useState } from "react";
// import Counter from "./Counter";
// import InputSample from "./InputSample";
import UserList from "./Array/UserList";
import CreateUser from "./Array/CreateUser";

// 1장 7~12
function Status() {
    const [inputs, setInputs] = useState({
        username : '',
        email : ''
    });

    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const [users, setUsers] = useState([
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
            active : flase
        },
        {
            id : 3,
            username : 'sejin',
            email : 'sejin@gmail.com',
            active : flase
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id : nextId.current,
            username,
            email
        };

        setUsers([...users, user]);

        setInputs({
            username : '',
            email : ''
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출하여 새로운 배열을 만든다.
        // = user.id가 id인 것을 제거한다.
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active : !user.active } : user
            )
        );
    };

    return (
        <>
        {/* <Counter /> <br />
        <InputSample /> */}
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    );
}

export default Status;