"use strict";

import TaskListFactory from "./tasklist";

const ProjectFactory = (name, taskList) => {
	// activate taskList object
	taskList = TaskListFactory(taskList);

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

export default ProjectFactory;
