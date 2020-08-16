 //selectors
 const todo_input = document.querySelector('.todo-input'); 
 const todo_button = document.querySelector('.todo-button');
 const todo_list = document.querySelector('.todo-list');
 
 //Event Listners
 todo_button.addEventListener('click', add_todo); 
 todo_list.addEventListener('click',deletecheck)
  
 //Functions
 function add_todo(event){
    //prevent from submiting form
     event.preventDefault();
     //create todo div
     const todoDiv = document.createElement('div');
     todoDiv.classList.add("todo");
     //create li
     const newtodo = document.createElement('li');
     newtodo.innerText = todo_input.value; 
     newtodo.classList.add('todo-item');
     todoDiv.appendChild(newtodo);
     //check mark button
     const completedbuttton = document.createElement('button');
     completedbuttton.innerHTML = '<i class="fa fa-check"/>';
     completedbuttton.classList.add("complete-btn");
     todoDiv.appendChild(completedbuttton); 
     //check trash button
     const trashbuttton = document.createElement('button');
     trashbuttton.innerHTML = '<i class="fa fa-trash"/>';
     trashbuttton.classList.add("trash-btn");
     todoDiv.appendChild(trashbuttton);
     //append to list
     todo_list.appendChild(todoDiv);
     //clear input value
     todo_input.value="";
 } 

 function deletecheck(event){
    const item = event.target;
    if (item.classList[0] === 'trash-btn'){
        item.parentElement.remove();
    }

 }
