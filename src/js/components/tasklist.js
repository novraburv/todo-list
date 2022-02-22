"use strict";

import "../../css/tasklist.css";
import UI from "../UI";

const TaskListTemplate = () => {
	const tasksContainer = document.createElement("div");
	tasksContainer.classList.add("tasks");

	const taskList = document.createElement("div");
	taskList.classList.add("tasks__tasklist");

	const createTaskButton = document.createElement("button");
	createTaskButton.classList.add("btn", "btn-create-task");
	createTaskButton.textContent = "Create Task";
	createTaskButton.addEventListener("click", UI.formTrigger);

	tasksContainer.append(taskList, createTaskButton);
	return tasksContainer;
};

export default TaskListTemplate;
