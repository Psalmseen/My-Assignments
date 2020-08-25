class Todo {
    constructor() {
      this.todos = [];
      this.pendingTodo = [];
      this.completedTodo = [];
      this.mappedTodo = [];

      this.uncheckedTodo = [];
      this.checkedTodo = [];

      this.$todoInput = document.querySelector("#todo-input");
      this.$todoList = document.querySelector("#todo-list");
      this.$addTodo = document.querySelector("#add-todo");
      this.$completedTodo = document.querySelector("#completed-todo");
      this.$pendingTodo = document.querySelector("#pending-todo");
      
      this.addEventListener ();
    };
     addEventListener(){
       // adds todo to the todo list
         this.$addTodo.addEventListener("click", event => {
            const text = this.$todoInput.value             
            event.preventDefault();
             this.addTodo({text}); 
         })
         // sort Completed and pending Todos
         document.body.addEventListener("click", () => {
         this.$input = document.querySelectorAll(".in");
         const inputedTodo =this.$input;
         this.uncheckedTodo = [];
         this.checkedTodo = [];

         let checkValueTodo = [...Array.from(this.$input).map( el =>  el = {value:el.checked, id:el.id})];// Converts the Nodelist to a real array
         checkValueTodo.forEach( el => {
            if(el.value === true){
                  //put checked in this array
                  const elId = el.id
                  const found = this.todos.find( el => el.id == elId )
                  this.checkedTodo.push(found);
                  }
                  else{
                  //put uncheck in an array
                  const elId = el.id
                  const found = this.todos.find( el => el.id == elId )
                  this.uncheckedTodo.push(found);
                  }
               })//sorts the created array and output two arrays
              
               this.$completedTodo.innerHTML =  this.checkedTodo.map(el =>`<li id = "${el.id}" >${el.text} </li>`).join("")
            
               this.$pendingTodo.innerHTML = this.uncheckedTodo.map(el => `<li id = "${el.id}" >${el.text}</li>`).join("");
         })
         
     }
    addTodo(todo){
        const newTodo = {
        text: todo.text,
        id: this.todos.length > 0 ? this.todos[this.todos.length-1].id + 1 : 1
         }
        this.todos = [...this.todos, newTodo]
        this.$todoList.innerHTML  = [...this.todos.map( el => el.text ? `<li id = "${el.id}" > ${el.text} <input class ="in" id = "${el.id}" type="checkbox"/></li>` : "" )].join("");
        
        this.$todoInput.value ="";
      }
}
new Todo();