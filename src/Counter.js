import React, { useState } from "react";

// useState 이용해서 컴포넌트 동적 값 관리하기
function Counter() {
    const [number, setNumber] = useState(1); // [현재 상태, setter 함수]

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        //setNumber(number + 1)
    };

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
        //setNumber(number - 1)
    };

    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
}

export default Counter;