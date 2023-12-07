let todoList = [
  {item : 'a',dueDate : '4/4'},
  {item : 'a',dueDate : '4/4'}
];
displayItems();

function addTodo(){

  let inputElement = document.querySelector('#input-id');
  let inputDate = document.querySelector('#input-date');
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  console.log(todoItem);
  todoList.push({item : todoItem, dueDate : todoDate});
  inputElement.value = '';
  inputDate.value = '';
  displayItems();
}


function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for(let i=0; i<todoList.length;i++){
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let{item,dueDate} = todoList[i];
   newHtml += `
  
  <span>${item}</span> <span>${dueDate}</span>
    <button class="btn-delete" onclick = "todoList.splice(${i}, 1); displayItems();">Delete</button>

   `;
  }
  containerElement.innerHTML = newHtml;
}