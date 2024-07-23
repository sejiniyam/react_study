import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";
import Movies from "./Movies";
import Movie from "./Movie";

const RouterApp = () => {
    return (
        <div style={{padding : 20}}>
            <ul>
                <li><Link to ="/">홈</Link></li>
                <li><Link to ="/about">소개</Link></li>
                <li><Link to ="/profiles">프로필 목록</Link></li>
                <li><Link to ="/history">예제</Link></li>
                <li><Link to ="/movies">영화 목록</Link></li>
            </ul>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/*" element={<Profiles />} />
                <Route path="/history" element={<HistorySample />} />
                <Route path="/movies" element={<Movies />} >
                    <Route path=":movieId" element={<Movie />} />
                </Route>
                <Route path="*" element={<div>페이지를 찾을 수 없어요!</div>} />
            </Routes>
        </div>
    );
};

export default RouterApp;