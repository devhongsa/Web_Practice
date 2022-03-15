const clock = document.querySelector("h2#clock");

// const date = new Date();
// 날짜객체 생성.

// date.getDate(); 
// date.getDay();
// date.getFullYear();
// date.getHours();
// date.getMinutes();
// date.getSeconds();

//"1".padStart(2,"0");          //만약 string이 2글자가 아니라면 앞에 "0" 추가 

function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0");           //String(date.getHours())
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);