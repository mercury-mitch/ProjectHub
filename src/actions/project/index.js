import { addElementToRoot } from "../../utils/RootHelpers";
import { getProjects }      from "../../../routes/firebase";
import { loading }          from "../loading";
import { templates }        from "../../templates";
import { actions }          from "..";

export const project = () => {
  // Start Loading
  //loading(true, 'project');

  // Fetch Projects
  getProjects().then(data => {
    const elProjectList = document.getElementById('projects-list');
    elProjectList.innerHTML = '';

    // Set Projects list
    data.map(project => {
      const elProject = document.createElement('DIV');
      elProject.className = 'project-item';
      elProject.innerHTML = templates.projectItemTemplate(project);
      elProject.onclick = () => {
        // Clear Projects menu
        elProjectList.innerHTML = '';
        
        // Open Navigation to Project selected
        addElementToRoot('navigation')
          .then(elNavigation => {
            elNavigation.innerHTML = templates.navigation();
            actions.navigation(project);
          })
      };

      elProjectList.appendChild(elProject);
    });
    
    // Stop Loading
    //loading(false, 'project');
  });
}
