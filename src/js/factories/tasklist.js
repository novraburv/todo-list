"use strict";

const TaskList = () => {
	const list = [];

	const add = (task) => {
		list.push(task);
	};
	const remove = (index) => {
		list.splice(index, 1);
	};

	// return finished list array
	const getTaskList = () => {
		return list;
	};

	return { add, remove, getTaskList };
};

export default TaskList;
