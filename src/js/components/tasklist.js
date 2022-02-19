"use strict";

const TasklistTemplate = () => {
	const tasksContainer = document.createElement("div");
	tasksContainer.classList.add("tasks");

	const tasklist = document.createElement("div");
	tasklist.classList.add("tasks__tasklist");

	const createTaskButton = document.createElement("button");
	createTaskButton.classList.add("btn", "btn-create-task");
	createTaskButton.textContent = "Create Task";

	tasksContainer.append(tasklist, createTaskButton);
	return tasksContainer;
};

export default TasklistTemplate;
