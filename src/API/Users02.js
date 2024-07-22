import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";

async function getUsers() {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
    );
    return response.data;
}

// 커스텀 훅(useAsync)을 사용한 api 연동
// 커스텀 훅은 결과물을 배열로 반환한다. (만약 라이브러리 사용시 객체 형태로 반환함)
function Users02() {
    const [ userId, setUserId] = useState(null);
    const [ state, refetch ] = useAsync(getUsers, [], true);
    const { loading, data : users, error } = state;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생..!!</div>;
    if (!users) return <button onClick={refetch}>정보 불러오기</button>;

    return (
        <>
        <ul>
            {users.map(user => (
                <li key={user.id} onClick={() => setUserId(user.id)} style={{ cursor: 'pointer'}}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
        <button onClick={refetch}>정보 다시 불러오기</button>
        {userId && <User id={userId} /> }
        </>
    );
}

export default Users02;