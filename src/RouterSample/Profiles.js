import React from "react";
import { Routes, Route, Link } from "react-router-dom"; 
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록 : </h3>
            <ul>
                <li><Link to="/profiles/sejin">sejin</Link></li>
                <li><Link to="/profiles/gildong">gildong</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<div>유저를 선택해주세요!</div>} />
                <Route path=":username" element={<Profile />} />
            </Routes>
        </div>
    );
};

// 서브 라우트 
export default Profiles;