const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

let toDos = [];  //항상 시작할 때 빈 array로 시작되게 된다.
const TOCOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TOCOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); //local Storage에는 array저장 불가, 오직 text만 저장 가능
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TOCOS_KEY);


if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos  //object array에 전에 저장해뒀던것 다시 넣어놔야해 (맨앞에서 초기화 되었으니까)
    parsedToDos.forEach(paintToDo)
}