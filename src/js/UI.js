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
  let taskList;

  // initialize functionalities
  const init = () => {
    createProjectButton.addEventListener("click", formTrigger);
    renderProject();
  };

  // ELEMENT TRIGGERS
  //
  // Form trigger -- a trigger that control two forms.
  // Project form and Task form.
  const formTrigger = (e) => {
    const form = e.currentTarget.parentNode.querySelector(".form");
    if (form) {
      closeForm(e);
      return;
    }
    openForm(e);
  };

  const openForm = (event) => {
    const createFormButton = event.currentTarget;
    const parent = createFormButton.parentNode;
    let form;

    if (createFormButton.classList.contains("btn-create-project")) {
      form = ProjectFormTemplate();
    }
    if (createFormButton.classList.contains("btn-create-task")) {
      form = taskFormTemplate();
    }

    parent.append(form);

    createFormButton.innerHTML = '<i class="material-icons-outlined">close</i>';
    createFormButton.classList.add("btn-close");
  };

  const closeForm = (event) => {
    const createFormButton = event.currentTarget;
    const form = event.currentTarget.nextElementSibling;
    let formType;

    if (createFormButton.classList.contains("btn-create-project")) {
      formType = "Project";
    }
    if (createFormButton.classList.contains("btn-create-task")) {
      formType = "Task";
    }

    createFormButton.textContent = `Create ${formType}`;
    createFormButton.classList.remove("btn-close");
    form.remove();
  };

  const closeFormOnSubmit = (event) => {
    const submitButton = event.currentTarget;
    const createFormButton = submitButton.parentNode.previousElementSibling;
    let formType;

    if (createFormButton.classList.contains("btn-create-project")) {
      formType = "Project";
    }
    if (createFormButton.classList.contains("btn-create-task")) {
      formType = "Task";
    }

    createFormButton.textContent = `Create ${formType}`;
    createFormButton.classList.remove("btn-close");
    submitButton.parentNode.remove();
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
    let taskIndex = 0;

    taskList.innerHTML = "";

    data[projectIndex].taskList.forEach((task) => {
      const taskToBePrinted = TaskTemplate(
        projectIndex,
        taskIndex,
        task.name,
        task.deadline
      );
      taskList.append(taskToBePrinted);
      taskIndex++;
    });
  };

  return {
    init,
    formTrigger,
    closeFormOnSubmit,
    renderProject,
    renderTasks,
    tasklistTrigger,
  };
})();

export default UI;
