import React from "react";

function Day() {
    let today = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <>
            <h1 class="today">{today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일</h1>
            <p>{week[today.getDay()]}요일</p>
        </>
    );
}

export default React.memo(Day);