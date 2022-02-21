"use strict";

import ProjectFactory from "./factories/project";

// module to control storage
const Storage = (() => {
	// Load from localStorage if any.
	let projects;
	(() => {
		if (!localStorage.getItem("data")) {
			projects = [];
			return;
		}
		projects = JSON.parse(localStorage.getItem("data")).map((project) =>
			ProjectFactory(project.name, project.taskList)
		);
	})();

	const add = addOperations();
	const remove = removeOperations();

	const addOperations = () => {
		const project = (projectName) => {
			projects.push(projectName);
			updateLocalStorage(projects);
		};
		const task = (projectIndex, taskName, taskDeadline) => {
			projects[projectIndex].taskList.add(taskName, taskDeadline);
			updateLocalStorage(projects);
		};
		return { project, task };
	};
	const removeOperations = () => {
		const project = (projectIndex) => {
			projects.splice(projectIndex, 1);
			updateLocalStorage(projects);
		};
		const task = (projectIndex, taskIndex) => {
			project[projectIndex].taskList.remove(taskIndex);
			updateLocalStorage(projects);
		};
		return { project, task };
	};

	// reveal data produced by the factories (Project, TaskList, and Task)
	// before insert them into LocalStorage
	const updateLocalStorage = (data) => {
		data = data.map((project) => project.getProject());
		localStorage.setItem("data", JSON.stringify(data));
	};

	// return finished Storage object
	const load = () => {
		return projects.map((project) => project.getProject());
	};

	return { add, remove, load };
})();

export default Storage;
