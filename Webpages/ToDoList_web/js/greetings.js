////구버전/////

//const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElementById("login-form");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");


// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username === ""){
//         alert("please write your name");
//     } else if(username.length > 15){
//         alert("your name is too long");
//     }

//     console.log(loginInput.value);
//     console.log("login button clicked!");
// }


// loginButton.addEventListener("click", onLoginBtnClick);




//// 신버전 ////

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";   // 보통 string을 담는 변수는 이렇게 대문자로 표현함. 
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();                 //addeventlistner가 이 함수를 실행할때 event에 대한 정보를 같이 넘겨줌. preventDefault는 event(submit)가 실행
                                            // 될때 브라우저가 기본으로 실행하는 것들(홈페이지 새로고침)을 하지 못하게 막아줌.
                                            // html에 a 태그는 링크이동인데, 마찬가지로 이것도 이동을 막을 수 있음. 
    const username = loginInput.value; 
    //console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);       //localStorage에 key, value 저장.
    //greeting.innerText = "Hello " + username;
    handleGreeting(username);
}

function handleGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);   

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else{
    handleGreeting(savedUsername);
}

