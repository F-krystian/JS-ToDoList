const generateTasksList = function(tasks, container) {
  console.log(tasks);
  container.innerHTML = "";
  tasks.forEach((task) => {
    let taskItem = `
        <div class="app_task-item" data-id="${task.id}" data-state="${task.state}">
          <input type="checkbox" name="app_task-item-check" id="app_task-item-check" class="app_task-item-check">
          <div class="app_task-item-text">${task.text}</div>
          <div class="app_task-item-functions">
            <button class="app_task-item-functions-btn app_task-item-edit" >Edit</button>
            <button class="app_task-item-functions-btn app_task-item-delete">Delete</button>
          </div>
        </div>    
    `;
  
  container.insertAdjacentHTML('afterbegin', taskItem);
  })
}

export {generateTasksList}