"use strict";

import { Form as ProjectFormFactory } from "./components/formProject";

// a collection of UI operators
export const UI = (() => {
  const createProjectButton = document.querySelector(".btn-create-project");
  const projectFormContainer = document.querySelector(
    ".container-project-form"
  );
  let projectForm = projectFormContainer.querySelector(".form");

  const init = () => {
    createProjectButton.addEventListener("click", openProjectForm);
  };

  // project form controls
  const openProjectForm = () => {
    if (projectForm) {
      return closeProjectForm();
    }
    projectForm = ProjectFormFactory();
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

  return { init, closeProjectForm };
})();
