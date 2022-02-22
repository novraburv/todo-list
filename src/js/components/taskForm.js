"use strict";

import "../../css/form.css";
import Storage from "../storage";
import UI from "../UI";

const taskFormTemplate = () => {
	const form = document.createElement("div");
	form.classList.add("form", "form-create-task");

	const inputName = document.createElement("input");
	inputName.classList.add("form__input");
	inputName.name = "task-name";
	inputName.id = "task-name";
	inputName.type = "text";
	inputName.placeholder = "Task Name";

	const inputDeadline = document.createElement("input");
	inputDeadline.classList.add("form__input");
	inputDeadline.name = "task-deadline";
	inputDeadline.id = "task-deadline";
	inputDeadline.type = "date";
	inputDeadline.placeholder = "mm/dd/yyyy";

	const submitButton = document.createElement("button");
	submitButton.classList.add("btn", "btn-submit");
	submitButton.innerHTML = '<i class="material-icons-outlined">done</i>';
	submitButton.addEventListener("click", submitTask);

	form.append(inputName, inputDeadline, submitButton);
	return form;
};

const submitTask = (e) => {
	const form = e.currentTarget.parentNode;
	const projectIndex = form.parentNode.parentNode.dataset.index;
	const taskName = form.querySelector("#task-name").value;
	const taskDeadline = form.querySelector("#task-deadline").value;

	Storage.add.task(projectIndex, taskName, taskDeadline);
	UI.renderTasks(projectIndex);
	UI.closeFormOnSubmit(e);
};

export default taskFormTemplate;
