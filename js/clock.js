const fullDate = document.querySelector("#clock span:first-child");
const time = document.querySelector("#clock span:last-child");
const days = ["일", "월", "화", "수", "목", "금", "토"];

function today() {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const day = days[today.getDay()];
    const hours = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    const changeMin = String(min).padStart(2, "0");
    const changeSec = String(sec).padStart(2, "0");
    fullDate.innerText = `${month+1}월 ${date}일 (${day})`;
    time.innerText = `${hours}:${changeMin}:${changeSec}`
}

today();
setInterval(today, 1000);