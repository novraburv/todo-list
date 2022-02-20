"use strict";

import "../../css/form.css";
import UI from "../UI";
import ProjectFactory from "../factories/project";
import Storage from "../storage";

const ProjectFormTemplate = () => {
	const form = document.createElement("div");
	form.classList.add("form", "form-create-project");

	const input = document.createElement("input");
	input.classList.add("form__input");
	input.name = "project-name";
	input.id = "project-name";
	input.type = "text";
	input.placeholder = "Project Name";

	const submit = document.createElement("button");
	submit.classList.add("btn", "btn-submit");
	submit.innerHTML = '<i class="material-icons-outlined">done</i>';
	submit.addEventListener("click", submitProject);

	form.append(input, submit);
	return form;
};

const submitProject = () => {
	const projectName = document.querySelector("#projectName").value;
	const project = ProjectFactory(projectName);
	Storage.add(project);
	UI.renderProject();
	UI.projectFormTrigger();
};

export default ProjectFormTemplate;
