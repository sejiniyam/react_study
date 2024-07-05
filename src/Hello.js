import React from "react";

function Hello({color, name, isSpecial}) {
    return <div style={{ color}}>
        { isSpecial ? <b>~ good ~</b> : null } {/* 조건부 렌더링 = 삼항 연산자 */}
        {isSpecial && <b>*</b>}
        안녕하세요!!{name}</div>
}

Hello.defaultProps = { // name이 없는 친구 기본 props 설정
    name : '이름 없음'
}

export default Hello;