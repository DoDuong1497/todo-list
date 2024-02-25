// let dataTask = [
//   {
//     id: Math.round(Math.random() * 100),
//     title: 'Lorem ipsum dolor sit amet',
//     date: new Date().toLocaleDateString(),
//   },
//   {
//     id: Math.round(Math.random() * 100),
//     title: 'Lorem ipsum dolor sit amet 3',
//     date: new Date().toLocaleDateString(),
//   },
//   {
//     id: Math.round(Math.random() * 100),
//     title: 'Lorem ipsum dolor sit amet 2',
//     date: new Date().toLocaleDateString(),
//   },
// ];

let dataLocal = JSON.parse(localStorage.getItem('data')) || [];

// if (dataLocal === null) dataLocal = [];

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
            <i class='bx bxs-trash-alt'></i>
          </button>
        </div>
      </li>
    `;
  }, []);
}

renderListTask(dataLocal);

let formTask = document.querySelector('.todo-add form');

formTask.addEventListener('submit', (e) => {
  e.preventDefault();

  let valueInputTaskName = document.getElementById('taskName').value;

  let newDataTaskItem = {
    id: Math.round(Math.random() * 100),
    title: valueInputTaskName,
    date: new Date().toLocaleDateString(),
  };

  let newDataTask = [...dataLocal, newDataTaskItem];
  dataLocal.push(newDataTaskItem);

  localStorage.setItem('data', JSON.stringify(dataLocal));

  renderListTask(newDataTask);
  document.getElementById('taskName').value = '';
});

function deleteTaskItem(taskId) {
  let taskItemIndex = dataLocal.findIndex((ele) => ele.id === taskId);
  if (taskItemIndex !== -1) {
    dataLocal.splice(taskItemIndex, 1);
  }

  localStorage.removeItem('data');

  renderListTask(dataLocal);
}

// let checkbox = document.querySelectorAll('.todo-list__checkbox');

// checkbox.forEach((ele) => {
//   ele.addEventListener('click', (e) => {
//     let taskItem = e.target.parentNode.parentElement;
//     taskItem.classList.toggle('checked');
//   });
// });

toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('todo-list__checkbox')) {
    let taskItem = e.target.closest('li');
    taskItem.classList.toggle('checked');
  }
});
