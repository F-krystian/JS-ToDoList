import { generateUniqueId } from "./utils.js";
import { getTasks, saveTasks } from "./storage.js";
import { generateTasksList } from "./ui.js";

let tasksDB = getTasks();

const addTask = function (text) {
  let uniqueId = generateUniqueId()
  let newTask = {
    id: uniqueId,
    text: text,
    state: "pending"
  }

  console.log(newTask);
  tasksDB.push(newTask)
  saveTasks(tasksDB)
}

const toggleTaskCompletion = function (taskId) {

}

const editTask = function(taskId) {

}

const deleteTask = function(taskId) {
  tasksDB = getTasks();
  let newTasks = tasksDB.filter((task) => task.id !== taskId);
  saveTasks(newTasks);
}

export {addTask, toggleTaskCompletion, editTask, deleteTask}


