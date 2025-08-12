import { getEl} from "./utils.js";
import { getTasks } from "./storage.js";
import { addTask } from "./tasks.js";

const addBtn = getEl(".btn_add-task");
const taskInputField = getEl(".new_task-text");

let tasksDB = getTasks();

addBtn.addEventListener('click', ()=> {
  let text = taskInputField.value;
  addTask(text);
})


