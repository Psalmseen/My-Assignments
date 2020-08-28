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

         //sort Completed and pending Todos
         document.body.addEventListener("click", (event) => {
           
            if(event.target.type === "checkbox"){ //check to see if checkbox is checked and calls handleChange
               this.handleChange(event.target.id)
            }
         this.$input = document.querySelectorAll(".in");
         const inputedTodo =this.$input;
         this.uncheckedTodo = [];
         this.checkedTodo = [];
            //sorts the created array and output two arrays
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
               })
               this.$completedTodo.innerHTML = this.checkedTodo.length > 0 ? this.checkedTodo.map(el =>`<li id = "${el.id}" ><span>${el.text}</span></li>`).join("") : `<p>All your completed Todos appear here</p>`;
               this.$pendingTodo.innerHTML = this.uncheckedTodo.length > 0 ? this.uncheckedTodo.map(el =>`<li id = "${el.id}" ><span>${el.text}</span></li>`).join("") : `<p>All your completed Todos appear here</p>`;
         })
         
     }


    addTodo(todo){
       if(Boolean(todo.text) === true){
        const newTodo = {
         text: todo.text,
         id: this.todos.length > 0 ? this.todos[this.todos.length-1].id + 1 : 1
          }
          this.todos.push(newTodo);
          this.mappedTodo.push( `<li id = "${newTodo.id}" >${newTodo.id}. <span>${newTodo.text}</span> <input class ="in" id = "${newTodo.id}" type="checkbox"/></li>`);
         }
         this.$todoList.innerHTML  = this.mappedTodo.join("");
         this.$todoInput.value ="";
      }


       handleChange(id){// edits the mapped todo and gives it a checked attribute
          let currentTodo = this.mappedTodo[id-1];
          const index = currentTodo.indexOf("input" ) + 5;
          this.mappedTodo[id-1] = currentTodo.slice(0, index) + " checked " +currentTodo.slice(index); 
       }
}

new Todo();