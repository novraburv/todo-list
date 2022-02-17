"use strict";

import { default as generateProjectForm } from "./components/formProject";
import ProjectTemplate from "./components/project";
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
    createProjectButton.addEventListener("click", openProjectForm);

    const data = ProjectFactory("Default Project");
    data.taskList.add("default task 1", "11/11/2011");
    data.taskList.add("default task 2", "10/10/2012");
    Storage.add(data);
    renderProject();
  };

  // project form controls
  const openProjectForm = () => {
    if (projectForm) {
      return closeProjectForm();
    }
    projectForm = generateProjectForm();
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

  return { init, closeProjectForm, renderProject };
})();

export default UI;
