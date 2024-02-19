let dataTask = [
  {
    id: Math.round(Math.random() * 100),
    title: 'Lorem ipsum dolor sit amet',
    date: new Date().toLocaleDateString(),
  },
  {
    id: Math.round(Math.random() * 100),
    title: 'Lorem ipsum dolor sit amet 3',
    date: new Date().toLocaleDateString(),
  },
  {
    id: Math.round(Math.random() * 100),
    title: 'Lorem ipsum dolor sit amet 2',
    date: new Date().toLocaleDateString(),
  },
];

let toDoList = document.querySelector('.todo-list ul');

function renderListTask(data) {
  toDoList.innerHTML = '';

  data.forEach((element) => {
    toDoList.innerHTML += `
      <li>
        <div class="todo-list__content">
          <div class="todo-list__checkbox"></div>
          <div class="todo-list__name">
            <h6>${element.title}</h6>
            <p class="todo-list__date">${element.date}</p>
          </div>
        </div>
        <div class="todo-list__control">
          <button type="button" class="btn-delete" onclick="deleteTaskItem(${element.id})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    `;
  });
}

renderListTask(dataTask);

let formTask = document.querySelector('.todo-add form');

formTask.addEventListener('submit', (e) => {
  e.preventDefault();

  let valueInputTaskName = document.querySelector('.task-input').value;

  let newDataTaskItem = {
    id: Math.round(Math.random * 100),
    title: valueInputTaskName,
    date: new Date().toLocaleDateString(),
  };

  let newDataTask = [...dataTask, newDataTaskItem];
  dataTask.push(newDataTask);
  renderListTask(newDataTask);
});

function deleteTaskItem(taskId) {
  let taskItemIndex = dataTask.findIndex((ele) => ele.id === taskId);
  if (taskItemIndex !== -1) {
    dataTask.splice(taskItemIndex, 1);
  }

  renderListTask(dataTask);
}

let checkbox = document.querySelectorAll('.todo-list__checkbox');

checkbox.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    let taskItem = e.target.parentNode.parentElement;
    taskItem.classList.toggle('checked');
  });
});
