import React from "react";
import { useParams } from 'react-router-dom';

// 프로필에서 사용할 데이터
const profileData = {
    sejin : {
        name : '세진',
        description : 
        '재밌는 것만 골라서 하는 개발자'
    },
    gildong : {
        name : '길동',
        description : '전래동화 주인공'
    }
}

const Profile = () => {

    // 파라미터를 받아올 땐, match안에 있는 params 값을 참조한다
    // const { username } = match.params;
    // const profile = profileData[username]; 이전 버전에선 이렇게 
    const { username } = useParams(); // 요즘 버전에선 이렇게! match 대신에 useParams 사용
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저</div>;
    }

    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;