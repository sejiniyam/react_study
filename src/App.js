import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import './App.css';

// 1장 1~6
function App() {
  const name = '세진';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  };

  return (
  <>
    {/* 주석은 화면에 보이지 않습니다 */}
    /* 중괄호로 감싸지 않으면 화면에 보입니다 */ <br />
    // 이렇게 해도 다 보이네

    <Hello name = "hohoho" color ="red"/>
    <Hello name = "hihihi" color ="blue"/>
    <Hello />

    <div style={style}>나는 {name}이라고 한다 호호</div>

    <div className="gray-box"></div>

    <Wrapper>
      <Hello name = "uuuuuu" color ="red" isSpecial/>
      <Hello name = "uuuuuu" color ="pink" isSpecial={false}/>
      <Hello name = "pppppp" color ="blue"/>
    </Wrapper>
  </>
  );
}

export default App;