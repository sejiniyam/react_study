import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom"; 
import { getMovie } from "./movie_data";

const Movie = () => {
    const params = useParams();
    const movie = getMovie(parseInt(params.movieId));

    // 쿼리 스트링 사용하기
    const location = useLocation(); // 현 위치를 뽑아오는구나?
    //console.log(location);

    const [ searchParams, setSearchParams ] = useSearchParams(); // 검색 값 가져옴
    //console.log(searchParams.get("detail"));
    const detail = searchParams.get("detail");

    const handleClick = () => {
        setSearchParams({detail : detail === "true" ? false : true});
        console.log(detail);
    };

    return (
        <div>
           <h2>상세 페이지</h2>
           <h3>[ {movie.title} ]</h3>
           <p>감독 : {movie.director}</p>
           <p>카테고리 : {movie.category}</p>
           <button onClick={handleClick} type="button">자세히</button>
           {detail === "true" ? <p>{movie.detail}</p> : " "}
        </div>
    );
};

export default Movie;