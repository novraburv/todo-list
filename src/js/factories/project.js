"use strict";

import TaskList from "./tasklist";

const Project = (name, taskList) => {
	// activate taskList object
	taskList = TaskList(taskList);

	const getName = () => {
		return name;
	};
	const setName = (newName) => {
		name = newName;
	};

	// return finished project
	const getProject = () => {
		return { name, taskList };
	};

	return { getName, setName, taskList, getProject };
};

export default Project;
