import { getEl, findItemIndexById} from "./utils.js";
import { getTasks } from "./storage.js";
import { addTask, deleteTask, editTask, toggleTaskCompletion } from "./tasks.js";
import { generateTasksList } from "./ui.js";

const addBtn = getEl(".btn_add-task");
const taskInputField = getEl(".new_task-text");
const taskListContainer = getEl(".app_display-elements")
const deleteBtns = getEl(".app_task-item-delete");
const editBtns = getEl(".app_task-item-edit");
const toggleBtns = getEl(".app_task-item-check");

let tasksDB = getTasks();

generateTasksList(tasksDB, taskListContainer);

addBtn.addEventListener('click', ()=> {
  let text = taskInputField.value;
  addTask(text);
  tasksDB = getTasks();
  generateTasksList(tasksDB, taskListContainer);
})


taskListContainer.addEventListener("click", (e) => {
  if (e.target.closest(".app_task-item-delete")) {
    const taskDiv = e.target.closest(".app_task-item"); // or whatever your wrapper class is
    const taskId = taskDiv.dataset.id;
    console.log(taskId);
    deleteTask(taskId);
    tasksDB = getTasks();
    generateTasksList(tasksDB, taskListContainer);
  }
});

// editBtns.forEach((btn) => {

  
// })



