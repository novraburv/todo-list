"use strict";

import "../../css/project.css";
import "../UI";
import UI from "../UI";

// A component to render projects to UI
const ProjectTemplate = (name, index) => {
	// main project box, consist of Project Container and Tasks Container
	// task Container will be generated later with other component and plugged here
	const projectCard = document.createElement("div");
	projectCard.classList.add("project");

	// project container, contain necessary details about the project and a remove button
	const projectContainer = document.createElement("div");
	projectContainer.classList.add("project__container");
	projectContainer.dataset.index = index;
	projectContainer.addEventListener("click", UI.tasklistTrigger);

	const projectName = document.createElement("h3");
	projectName.classList.add("project__name");
	projectName.textContent = name;

	const projectRemove = document.createElement("button");
	projectRemove.classList.add("btn", "btn-remove", "btn-remove-project");
	projectRemove.innerHTML = '<i class="material-icons-outlined">remove</i>';

	projectContainer.append(projectName, projectRemove);

	projectCard.append(projectContainer);
	return projectCard;
};

export default ProjectTemplate;
