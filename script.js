document.getElementById('todo-form').addEventListener('submit', function(e) {
	e.preventDefault();
	const todoInput = document.getElementById('todo-input');
	const todoList = document.getElementById('todo-list');
	const newLi = document.createElement('li');
	newLi.innerHTML = `<span>${todoInput.value}</span><button class="delete-button">Deletar</button>`;
	todoList.appendChild(newLi);
	todoInput.value = '';

	newLi.querySelector('.delete-button').addEventListener('click', function() {
		todoList.removeChild(newLi);
	});

	todoList.addEventListener('click', function(e) {
		if (e.target.tagName === 'SPAN') {
			e.target.classList.toggle('completed');
		}
	});
});

document.getElementById('clear-button').addEventListener('click', function() {
	const todoList = document.getElementById('todo-list');
	while (todoList.firstChild) {
		todoList.removeChild(todoList.firstChild);
	}
});