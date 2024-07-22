import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User_async from "./User_async";

async function getUsers() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
}

// react-async 라이브러리 적용시키기
function Users_async() {
    const [ userId, setUserId] = useState(null);
    const { data : users, error, isLoading, reload } = useAsync({
        promiseFn : getUsers
    });

    if (isLoading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생..!!</div>;
    if (!users) return <button onClick={reload}>정보 불러오기</button>;

    return (
        <>
        <ul>
            {users.map(user => (
                <li key={user.id} onClick={() => setUserId(user.id)} style={{ cursor: 'pointer'}}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
        <button onClick={reload}>정보 다시 불러오기</button>
        {userId && <User_async id={userId} /> }
        </>
    );
}

export default Users_async;