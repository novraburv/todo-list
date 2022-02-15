"use strict";

const TaskList = (list = []) => {
	list;

	const add = (task) => {
		list.push(task);
	};
	const remove = (index) => {
		list.splice(index, 1);
	};

	// return finished list
	const getTaskList = () => {
		return list;
	};

	return { add, remove, getTaskList };
};

export default TaskList;
