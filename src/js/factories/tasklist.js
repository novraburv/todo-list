"use strict";

import TaskFactory from "./task";

const TaskListFactory = (list) => {
	// activate list either when loaded from localStorage or created by new project
	(() => {
		if (!list) {
			list = [];
			return;
		}
		list = list.map((task) => TaskFactory(task.name, task.deadline));
	})();

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
