const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));              //local storage는 string으로 저장되기 때문에 stringfy를 써줘야함.
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((item)=>item.id !== parseInt(li.id));         //원래 id는 number인데 여기서 li.id는 데이터타입이 string으로 나옴. 그래서 변환
    li.remove();                                                       
    saveTodos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";

    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = { text:newTodo, id : Date.now()};
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos(); 
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}