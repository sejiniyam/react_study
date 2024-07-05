import React, { useState, useRef } from "react";

// input 태그의 상태 관리하는 방법
function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickName : ''
    });

    const nameInput = useRef();

    const {name, nickName} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target; // 우선, e.target에서 name과 value를 추출한다.
        setInputs({
            ...inputs, // 기존 input 객체를 복사
            [name] : value // name 키를 가진 값을 value로 설정한다.
        });
    };

    const onReset = () => {
       setInputs({
        name : '',
        nickName : '',
       });
       nameInput.current.focus();
    };

    return (
        <>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickName})
            </div>
        </>
    );
}

export default InputSample;