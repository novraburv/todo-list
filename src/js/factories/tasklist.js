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
	const getList = () => {
		return list;
	};

	return { getList, add, remove };
};

export default TaskList;
