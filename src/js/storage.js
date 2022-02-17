"use strict";

// module to control storage
const Storage = (() => {
	const projects = [];

	const add = (project) => {
		projects.push(project);
		updateLocalStorage(projects);
	};
	const remove = (index) => {
		projects.splice(index, 1);
		updateLocalStorage(projects);
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
