import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

// Users02에서 각 id에 해당하는 정보 클릭했을때, 개별로 뜨게 하기
// api 요청시 파라미터가 필요한 경우

async function getUser(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}` // 허겅 ' 아니고 ` 사용해야함
    );
    return response.data;
}

function User({ id }) {
    // id가 변경될 때마다 getUser 함수를 새로 호출하기 위해서 "화살표 함수" 사용함
    const [ state ] = useAsync(() => getUser(id), [id]);
    const { loading, data : user, error } = state;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생..!! {error} </div>;
    if (!user) return null;

    return (
        <>
        <h2>{user.username}</h2>
        <p><b>Email:</b> {user.email}</p>
        </>
    );
}

export default User;