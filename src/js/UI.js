"use strict";

import ProjectFormTemplate from "./components/formProject";
import ProjectTemplate from "./components/project";
import TasklistTemplate from "./components/tasklist";

import ProjectFactory from "./factories/project";
import Storage from "./storage";

// a collection of UI operators
const UI = (() => {
  // constants
  const createProjectButton = document.querySelector(".btn-create-project");
  const projectList = document.querySelector(".project-list");

  // variables
  let projectForm;
  let tasklist;

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

  // project control that trigger Tasklist to be shown or hidden;
  const tasklistTrigger = (e) => {
    if (tasklist) {
      tasklist = tasklist.remove();
      return;
    }
    openTasklist(e);
  };

  const openTasklist = (e) => {
    const project = e.currentTarget.parentNode;
    tasklist = TasklistTemplate();
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

  return { init, projectFormTrigger, renderProject, tasklistTrigger };
})();

export default UI;
