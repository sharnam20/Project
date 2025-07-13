let todolist = [];
printtodo();

function addtodo() {
  let inputelement = document.querySelector('#input-text');
  let todoitem = inputelement.value.trim();

  let inputdate = document.querySelector('#input-date');
  let tododate = inputdate.value;

  if (todoitem === "" || tododate === "") {
    alert("Please enter a task and select a date.");
    return;
  }

  todolist.push({ item: todoitem, duedate: tododate });

  inputelement.value = '';
  inputdate.value = '';

  printtodo();
}

function printtodo() {
  let getelement = document.querySelector('.todo-container'); 
  let newhtml = ''; 

  for (let i = 0; i < todolist.length; i++) {
    let { item, duedate } = todolist[i];
    newhtml += `
      <div class="todo-item">
        <span class="task">${item}</span>
        <span class="date">${duedate}</span>
        <button onclick="todolist.splice(${i},1); printtodo();">Delete</button>
      </div>
    `;
  }

  getelement.innerHTML = newhtml;
}
