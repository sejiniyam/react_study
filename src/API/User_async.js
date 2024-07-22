import React from "react";
import axios from "axios";
import { useAsync } from "react-async";

// react-async 라이브러리 적용시키기
// 프로미스를 반환하는 함수의 파라미터를 객체형태로 해주어야 한다. 
// { id } 이렇게 행 id값을 따로 받아서 사용할 수 있다!
async function getUser({ id }) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

function User_async({ id }) {
    const { data : user, error, isLoading } = useAsync({
        promiseFn : getUser,
        id,
        watch : id
    });

    if (isLoading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생..!! {error} </div>;
    if (!user) return null;

    return (
        <>
        <h2>{user.username}</h2>
        <p><b>Email:</b> {user.email}</p>
        </>
    );
}

export default User_async;