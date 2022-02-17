"use strict";

import TaskFactory from "./task";

const TaskListFactory = (list) => {
	if (!list) list = [];

	const add = (name, deadline) => {
		const task = TaskFactory(name, deadline);
		list.push(task);
	};
	const remove = (index) => {
		list.splice(index, 1);
	};

	// return finished list array ready for json
	const getTaskList = () => {
		if (list.length < 1) return list;
		return list.map((task) => task.getTask());
	};

	return { add, remove, getTaskList };
};

export default TaskListFactory;
