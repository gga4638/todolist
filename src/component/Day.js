import React from "react";

function Day() {
    let today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long'});

    return (
        <>
            <h1 class="today">{ dateString }</h1>
            <p>{ dayName }</p>
        </>
    );
}

export default React.memo(Day);