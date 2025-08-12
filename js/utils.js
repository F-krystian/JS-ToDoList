const getEl = function (selector) {
  let elements = document.querySelectorAll(selector);
  if (elements.length === 0) return null;
  if (elements.length === 1) return elements[0]
  return [...elements];
}

const generateUniqueId = function() {
  return Date.now().toString();
}

const findItemIndexById = function(itemId, tasks) {
  return tasks.findIndex(task => task.id === itemId);
}

export {getEl, generateUniqueId, findItemIndexById}