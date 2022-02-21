"use strict";

import Storage from "../storage";
import UI from "../UI";

const TaskTemplate = (projectIndex, taskIndex, name, deadline) => {
	const task = document.createElement("div");
	task.classList.add("tasks__task");
	task.dataset.projectIndex = projectIndex;
	task.dataset.taskIndex = taskIndex;

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
	removeTaskButton.classList.add("btn", "btn-remove", "btn-remove-task");
	removeTaskButton.innerHTML =
		'<i class="material-icons-outlined">remove</i>';
	removeTaskButton.addEventListener("click", removeTask);

	task.append(taskDetailContainer, removeTaskButton);
	return task;
};

const removeTask = (e) => {
	const removeTaskButton = e.currentTarget;
	const projectIndex = removeTaskButton.parentNode.dataset.projectIndex;
	const taskIndex = removeTaskButton.parentNode.dataset.taskIndex;

	Storage.remove.task(projectIndex, taskIndex);
	UI.renderTasks(projectIndex);
};

export default TaskTemplate;
