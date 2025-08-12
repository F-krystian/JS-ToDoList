const getTasks = function() {
  let tasksDB = localStorage.getItem("toDoListDB");
  
  return tasksDB ? JSON.parse(tasksDB) : [];
}

const saveTasks = function (tasks) {
  localStorage.setItem("toDoListDB", JSON.stringify(tasks)); 
}

export {getTasks, saveTasks}