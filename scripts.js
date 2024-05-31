document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            newTaskInput.value = '';
        }
    });
});
