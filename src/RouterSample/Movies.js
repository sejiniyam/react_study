import React from "react";
import { getMovies } from "./movie_data";
import { NavLink, Link, Outlet } from "react-router-dom";

const Movies = () => {
    const movies = getMovies();

    return (
        <div>
           <h1>영화 추천 목록</h1>
           <div>
            {movies.map((movie) => (
                <NavLink // 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 css 적용할 수 있음!
                    to={`/movies/${movie.id}`}
                    key={movie.id} 
                    style={({ isActive }) => {
                        return {
                            textDecoration : isActive ? "underLine" : "",
                            color : isActive ? "#FF9E1B" : "",
                        };
                    }}
                ><p>{movie.title}</p>
                </NavLink>
            ))}
           </div>
           <hr />
           <Outlet />
        </div>
    );
};

export default Movies;