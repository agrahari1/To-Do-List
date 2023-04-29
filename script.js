const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = todo;
    const button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click', () => {
      deleteTodo(index);
    });
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
  });
}

function addTodo() {
  const todo = input.value.trim();
  if (todo !== '') {
    todos.push(todo);
    renderTodos();
    input.value = '';
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});

