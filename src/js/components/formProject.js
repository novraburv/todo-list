"use strict";

import "../../css/form.css";
import UI from "../UI";

const Form = () => {
	const form = document.createElement("div");
	form.classList.add("form", "form-create-project");

	const input = document.createElement("input");
	input.classList.add("form__input");
	input.type = "text";
	input.placeholder = "Project Name";

	const submit = document.createElement("button");
	submit.classList.add("btn", "btn-submit");
	submit.innerHTML = '<i class="material-icons-outlined">done</i>';
	submit.addEventListener("click", () => {
		console.log(
			`get some functions to process this form ${Math.floor(
				Math.random() * 10
			)}`
		);
		UI.closeProjectForm();
	});

	form.append(input, submit);

	return form;
};

export default Form;
