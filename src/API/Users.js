import React, { useEffect, useState } from "react";
import axios from "axios";

// useState를 사용한 api 연동
function Users() {
    const [ users, setUsers ] = useState(null); // 요청의 결과
    const [ loading, setLoading ] = useState(null); // 로딩 상태
    const [ error, setError ] = useState(null); // 에러

    const fetchUsers = async () => {
        try {
            // 요청이 시작할 때, error와 users 초기화
            setError(null);
            setUsers(null);

            // loading 의 상태를 true로 바꾼다
            setLoading(true);

            const response = await axios.get (
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생..!!</div>;
    if (!users) return null;

    return (
        <>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
        <button onClick={fetchUsers}>정보 다시 불러오기</button>
        </>
    );
}

export default Users;