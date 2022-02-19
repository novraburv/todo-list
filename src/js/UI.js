"use strict";

import ProjectFormTemplate from "./components/formProject";
import ProjectTemplate from "./components/project";
import TasklistTemplate from "./components/tasklist";

import ProjectFactory from "./factories/project";
import Storage from "./storage";

// a collection of UI operators
const UI = (() => {
  const createProjectButton = document.querySelector(".btn-create-project");
  const projectFormContainer = document.querySelector(
    ".container-project-form"
  );
  const projectList = document.querySelector(".project-list");

  // many many modals
  let projectForm = projectFormContainer.querySelector(".form");

  // initialize functionalities
  const init = () => {
    createProjectButton.addEventListener("click", projectFormTrigger);

    const data = ProjectFactory("Default Project");
    data.taskList.add("default task 1", "11/11/2011");
    data.taskList.add("default task 2", "10/10/2012");
    Storage.add(data);
    renderProject();
  };

  // project form controls
  const projectFormTrigger = () => {
    if (projectForm) {
      closeProjectForm();
      return;
    }
    openProjectForm();
  };

  const openProjectForm = () => {
    projectForm = ProjectFormTemplate();
    projectFormContainer.append(projectForm);
    createProjectButton.innerHTML =
      '<i class="material-icons-outlined">close</i>';
    createProjectButton.classList.add("btn-close");
  };

  const closeProjectForm = () => {
    projectForm = projectForm.remove();
    createProjectButton.textContent = "Create Project";
    createProjectButton.classList.remove("btn-close");
  };

  // project control that trigger Tasklist to be shown or hidden;
  const tasklistTrigger = (e) => {
    const tasklist = e.currentTarget.parentNode.querySelector(".tasks");
    if (tasklist) {
      tasklist.remove();
      return;
    }
    openTasklist(e);
  };

  const openTasklist = (e) => {
    const project = e.currentTarget.parentNode;
    const tasklist = TasklistTemplate();
    project.append(tasklist);
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

  return { init, closeProjectForm, renderProject, tasklistTrigger };
})();

export default UI;
