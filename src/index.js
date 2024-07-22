import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Status from './Status';
import reportWebVitals from './reportWebVitals';
// import Counter from './Counter';
// import StyleApp from './StyleApp';
import TodoListApp from './TodoListApp';
import Users from './API/Users';
import Users01 from './API/Users01';
import Users02 from './API/Users02';
import Users_async from './API/Users_async';
import { UsersProvider  } from './API/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersProvider>
    <Users_async />
  </UsersProvider>
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <Status /> */}
  //   {/* <Counter /> */}
  //   {/* <StyleApp /> */}
  //   {/* <TodoListApp /> */}
  //   {/* <Users /> */}
  //   <Users_async />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
