function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== "") {
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    // Toggle task completion
    li.addEventListener('click', () => {
      li.classList.toggle('task-completed');
    });

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.classList.add('cross-btn');
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering task completion
      li.remove();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
