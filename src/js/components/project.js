"use strict";

import "../../css/project.css";

// A component to render projects to UI
const ProjectTemplate = (name, index) => {
	// main project box, consist of Project Container and Tasks Container
	const project = document.createElement("div");
	project.classList.add("project");

	// project container, contain necessary details about the project and a remove button
	const projectContainer = document.createElement("div");
	projectContainer.classList.add("project__container");
	projectContainer.dataset.index = index;

	const projectName = document.createElement("h3");
	projectName.classList.add("project__name");
	projectName.textContent = name;

	const projectRemove = document.createElement("button");
	projectRemove.classList.add("btn", "btn-remove", "btn-remove-project");
	projectRemove.innerHTML = '<i class="material-icons-outlined">remove</i>';
	projectRemove.dataset.index = index;

	// tasks container, contain a list of tasks of each project
	const tasksContainer = document.createElement("div");
	tasksContainer.classList.add("project__tasksContainer");

	projectContainer.append(projectName, projectRemove);
	project.append(projectContainer);
	return project;
};

export default ProjectTemplate;
