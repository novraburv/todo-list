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

	// return finished project object ready for json
	const getProject = () => {
		return { name, taskList: taskList.getTaskList() };
	};

	return { getName, setName, taskList, getProject };
};

export default Project;
