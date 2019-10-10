/*
This is the 4th version of my todo list that I'm building along with Gordon Zhu at watchandcode.com! 

The other three, simpler versions, were just typed in chrome dev tools. 

The purpose of this is to learn JS. Not my own code. Just and exciting exercise. As exciting as a todo list can be...

*/

let todoList = {
    todos: [],
    //logs message if there are 0 todos otherwise,
    //determines length of todos and loops through them and
    //logs todos todoText property to the console for each one. 
    displayTodos: function() {
        
        if ( this.todos.length === 0 ) {
            console.log( 'Your todo list is empty!' );
        } else {
            console.log('My Todos:');
            for( var i = 0; i < this.todos.length; i++ ) {
                //check if .completed is true or false for each for loop
                if ( this.todos[i].completed === true ) {
                    console.log( '(x)', this.todos[i].todoText );
                } else {
                    console.log( '( )', this.todos[i].todoText );
                }   
            } 
         }   
    },
    //adds todo object to todos array
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    //changes the todoText property in the given array index to new todoText
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    //deletes todo object in given array index
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

