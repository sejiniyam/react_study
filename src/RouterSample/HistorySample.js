import React from "react";
import { useNavigate } from "react-router-dom";

const HistorySample = () => {
    const navigate = useNavigate();
    const goBack = () => {
        const confirm = window.confirm('정말 떠나시나욧');
        if (confirm) {
            navigate(-1); // 바로 이전에 방문했던 곳으로 이동
        }
    };

    const goHome = () => {
        navigate('/');
    };

    return (
        <div>
            <button onClick={goBack}>떠나기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );
};

export default HistorySample;