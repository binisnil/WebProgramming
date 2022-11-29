const form  = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const todoText = input.value;

    if(todoText){
        const todoE1 = document.createElement('li');
        todoE1.innerText = todoText;

        todoE1.addEventListener('click', () =>{
            todoE1.classList.toggle('completed');
        })
        todos.appendChild(todoE1);

        input.value = "";
    }
});