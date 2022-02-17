"use strict";

const Task = (name, deadline) => {
  const getName = () => {
    return name;
  };
  const setName = (newName) => {
    name = newName;
  };
  const getDeadline = () => {
    return deadline;
  };
  const setDeadline = (newDeadline) => {
    deadline = newDeadline;
  };

  // return finished task object ready for json
  const getTask = () => {
    return { name, deadline };
  };

  return { getName, setName, getDeadline, setDeadline, getTask };
};

export default Task;
