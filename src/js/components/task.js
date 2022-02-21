"use strict";

const TaskTemplate = (name, deadline, index) => {
	const task = document.createElement("div");
	task.classList.add("tasks__task");
	task.dataset.index = index;

	const taskDetailContainer = document.createElement("div");
	taskDetailContainer.classList.add("tasks__task-details");

	const taskName = document.createElement("h4");
	taskName.classList.add("tasks__task-name");
	taskName.textContent = name;

	const taskDeadline = document.createElement("p");
	taskDeadline.classList.add("tasks__task-deadline");
	taskDeadline.textContent = deadline;

	taskDetailContainer.append(taskName, taskDeadline);

	const removeTaskButton = document.createElement("button");
	removeTaskButton.classList.add(".btn", "btn-remove", "btn-remove-task");
	removeTaskButton.innerHTML = '<i class="material-icons">remove</i>';

	task.append(taskDetailContainer, removeTaskButton);
	return task;
};

export default TaskTemplate;
