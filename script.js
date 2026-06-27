// Get DOM elements
var taskInput  = document.getElementById('task-input');
var addBtn     = document.getElementById('add-btn');
var taskList   = document.getElementById('task-list');
var emptyMsg   = document.getElementById('empty-msg');

// Add task on button click
addBtn.addEventListener('click', function() {
  addTask();
});

// Add task on Enter key
taskInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Add a new task
function addTask() {
  var text = taskInput.value.trim();

  if (text === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  var li = document.createElement('li');
  li.className = 'task-item';

  // Checkbox
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });

  // Task text
  var span = document.createElement('span');
  span.textContent = text;

  // Delete button
  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
    updateEmptyMessage();
  });

  // Add to list item
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add to task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
  taskInput.focus();

  updateEmptyMessage();
}

// Show or hide the empty message
function updateEmptyMessage() {
  if (taskList.children.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
  }
}

// Hide empty message initially (shown by default via HTML)
updateEmptyMessage();