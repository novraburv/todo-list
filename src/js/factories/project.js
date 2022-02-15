"use strict";

import TaskList from "./tasklist";

const Project = (name, taskList = []) => {
	name;
	taskList;

	const list = TaskList(taskListist);

	const getName = () => {
		return name;
	};
	const setName = (newName) => {
		name = newName;
	};

	// return finished project
	const getProject = () => {
		const list = list.getList();
		return { name, list };
	};

	return { getName, setName, list, getProject };
};

export default Project;
