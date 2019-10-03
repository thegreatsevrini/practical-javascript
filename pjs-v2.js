/*
This is the 2nd version of my todo list that I'm building along with Gordon Zhu at watchandcode.com! 
*/

//it should have a place to store the todos
let todos = [];

//it should have a way to display todos
function displayTodos() {
    console.log(todos);
}

//it should have a way to add todos
function addTodo(todo) {
    todo.push(todo);
    displayTodos();
}

//it should have a way to change a todo
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

//it should have a way to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}