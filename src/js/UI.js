"use strict";

import ProjectFormTemplate from "./components/projectForm";
import taskFormTemplate from "./components/taskForm";
import ProjectTemplate from "./components/project";
import TaskListTemplate from "./components/tasklist";
import TaskTemplate from "./components/task";

import Storage from "./storage";

// a collection of UI operators
const UI = (() => {
  // constants
  const createProjectButton = document.querySelector(".btn-create-project");
  const projectList = document.querySelector(".project-list");

  // variables
  let projectForm;
  let taskList;

  // initialize functionalities
  const init = () => {
    createProjectButton.addEventListener("click", projectFormTrigger);
    renderProject();
  };

  // ELEMENT TRIGGERS
  //
  const projectFormTrigger = (e) => {
    if (projectForm) {
      closeProjectForm();
      return;
    }
    openProjectForm(e);
  };

  const openProjectForm = (e) => {
    const main = e.currentTarget.parentNode;
    projectForm = ProjectFormTemplate();
    main.append(projectForm);

    createProjectButton.innerHTML =
      '<i class="material-icons-outlined">close</i>';
    createProjectButton.classList.add("btn-close");
  };

  const closeProjectForm = () => {
    projectForm = projectForm.remove();

    createProjectButton.textContent = "Create Project";
    createProjectButton.classList.remove("btn-close");
  };

  //
  const taskFormTrigger = (e) => {
    const taskForm =
      e.currentTarget.parentNode.querySelector(".form-create-task");
    if (taskForm) {
      closeTaskForm(e);
      return;
    }
    openTaskForm(e);
  };

  const openTaskForm = (event) => {
    const createTaskButton = event.currentTarget;
    const parent = createTaskButton.parentNode;
    const taskForm = taskFormTemplate();
    parent.append(taskForm);

    createTaskButton.innerHTML = '<i class="material-icons-outlined">close</i>';
    createTaskButton.classList.add("btn-close");
  };

  const closeTaskForm = (event) => {
    const createTaskButton = event.currentTarget;
    const taskForm = event.currentTarget.nextElementSibling;

    taskForm.remove();
    createTaskButton.textContent = "Create Task";
    createTaskButton.classList.remove("btn-close");
  };

  // project control that trigger Tasklist to be shown or hidden;
  const tasklistTrigger = (e) => {
    if (taskList) {
      taskList = taskList.remove();
    }
    openTasklist(e);
  };

  const openTasklist = (e) => {
    const project = e.currentTarget.parentNode;
    taskList = TaskListTemplate();
    project.append(taskList);
    renderTasks(project.dataset.index);
  };

  // render anything from the localStorage
  const renderProject = () => {
    const data = Storage.load();
    let index = 0;

    projectList.innerHTML = "";

    data.forEach((project) => {
      projectList.append(ProjectTemplate(project.name, index));
      index++;
    });
  };

  const renderTasks = (projectIndex) => {
    const data = Storage.load();
    const project = document.querySelector(
      `.project[data-index="${projectIndex}"]`
    );
    const taskList = project.querySelector(".tasks__tasklist");
    let index = 0;

    taskList.innerHTML = "";

    data[projectIndex].taskList.forEach((task) => {
      const taskToBePrinted = TaskTemplate(task.name, task.deadline, index);
      taskList.append(taskToBePrinted);
      index++;
    });
  };

  return {
    init,
    projectFormTrigger,
    taskFormTrigger,
    renderProject,
    renderTasks,
    tasklistTrigger,
  };
})();

export default UI;
