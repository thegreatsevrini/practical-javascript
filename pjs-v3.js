/*
This is the 4th version of my todo list that I'm building along with Gordon Zhu at watchandcode.com! 

The other three, simpler versions, were just typed in chrome dev tools. 

The purpose of this is to learn JS. Not my own code. Just and exciting exercise. As exciting as a todo list can be...

*/

let todoList = {
    todos: [],
    displayTodos: function() {   
        if (this.todos.length  === 0) {
            console.log('You did all the things already!');
        } else {
            console.log('My Todos:');
            for(var i = 0; i < this.todos.length; i++) {
                console.log(this.todos[i].todoText);
        }
    }
            
            //print todos as normal
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

