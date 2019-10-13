/*
This is the 4th version of my todo list that I'm building along with Gordon Zhu at watchandcode.com! 

The other three, simpler versions, were just typed in chrome dev tools. 

The purpose of this is to learn JS. Not my own code. Just and exciting exercise. As exciting as a todo list can be...

*/
//represents todoList array and the buttons that manipulate the data inside
let todoList = {
    todos: [],
    //adds todo object to todos array
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        
    },
    // this object changes the todoText property in the given array index to new todoText
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        
    },
    //deletes todo object in given array index
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        
    },
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        //get number of completed todos
        for ( let i = 0; i < totalTodos; i++ ) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        //Case 1: If everything's true, make everything false.
        if ( completedTodos === totalTodos ) {
            for ( let i = 0; i < totalTodos; i++ ) {
                this.todos[i].completed = false;
            }
        //Case 2: Otherwise, make everything true.
        } else {
            for ( let i = 0; i < totalTodos; i++ ) {
                this.todos[i].completed = true;
            }
        } 
          
    }
};

//this object handles all the user interaction
let handlers = {
    addTodo: function(){
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    }, 
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPosiitonInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPosiitonInput.valueAsNumber);
        toggleCompletedPosiitonInput.value = '';
        view.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    }
};

//this object is responsible for displaying todoList on screen
//it does not change how the todo list works
let view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++ ) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';
            
            if( todo.completed === true ) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function() {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event) {
            console.log(event.target.parentNode.id);

            // get the element that was clicked on
            var elementClicked = event.target;

            // check if element clicked is a delete button
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        
            }   
        });
    }
};
view.setUpEventListeners;


