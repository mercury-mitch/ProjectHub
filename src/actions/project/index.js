import { addElementToRoot } from "../../utils/RootHelpers";
import { MercuryHub }       from "../../../routes/firebase";
import { loading }          from "../../utils/loading";
import { templates }        from "../../templates";
import { actions }          from "..";
import { mountHome }        from "../../mounts/home";
import { projectTypes }     from "../../templates/project";

export const project = () => {
  const elProjects = document.getElementById('project');

  // Start Loading
  loading(true, 'projects-list');

  // Fetch Projects
  MercuryHub.GET('projects').then(data => {
    const elProjectList = document.getElementById('projects-list');
    const elProjectSearch = document.getElementById('project-search-input');
    const elNewProjectBtn = document.getElementById('new-project-btn');

    // Open Project Function 
    const openProject = (project, initialAction) => {
      // Clear Projects menu
      document.getElementById('root').innerHTML = '';

      // Open Navigation to Project selected
      addElementToRoot('navigation')
        .then(elNavigation => {
          elNavigation.innerHTML = templates.navigation();
          actions.navigation(project, initialAction);
        })
    }
    // Configure new project button
    elNewProjectBtn.onclick = () => {
      elProjects.innerHTML = templates.newProjectTemplate();


      // Trigger actions when project name submitted
      const elNewProjectForm = document.getElementById('new-project-form');
      const elNewProjectName = document.getElementById('new-project-name');
      const elCancel = document.getElementById('new-project-name-cancel');
      const elNext = document.getElementById('new-project-name-next');

      elCancel.onclick = () => mountHome();
      elNext.onclick = () => {
        elNewProjectForm.innerHTML = templates.projectTypesTemplate();

        // Trigger actions
        Object.keys(projectTypes).map((projectType, i) => {
          document.getElementById(`${projectType}-btn`)
            .onclick = () => {
              const newProjectData = {
                name: elNewProjectName.value,
                projectType: Object.values(projectTypes)[i].label
              }
              createProject(newProjectData)
            }
        })

        const createProject = payload => {
          // Start Loading
          loading(true, 'projects-list');
          
          const route = '/projects';
          // Create the Project
          MercuryHub.POST(route, payload).then(response => {
            // Open new Project
            openProject(response);
            // Stop Loading
            loading(false, 'projects-list');
          })
        }
      };
    }

    // Clear existing results
    elProjectList.innerHTML = '';

    // Set Projects list
    data.map(project => {
      const elProject = document.createElement('DIV');
      elProject.className = 'project-item';
      elProject.dataset.name = project.name;
      elProject.innerHTML = templates.projectItemTemplate(project);
      elProject.onclick = e => {

        const initialActions = {
          tachometeralt: "dashboard",
          userscrown: "team",
          megaphone: "marketing",
          cog: "settings"
        }
        
        let initialAction = 'dashboard';

        if (initialActions[[...e.target.classList][1]?.slice(3).replace('-', '')]) {
          initialAction = initialActions[[...e.target.classList][1]?.slice(3).replace('-', '')];
        }

        openProject(project, initialAction);
      };

      elProjectList.appendChild(elProject);
    });

    // Configure search actions
    elProjectSearch.oninput = e => {
      const projectListItems = document.querySelectorAll(`.project-item[data-name`);
      projectListItems.forEach(item => {
        if (!item.dataset.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          item.classList.add('hide');
        }
        else {
          item.classList.remove('hide');
        }
      })
    }
    
    // Stop Loading
    loading(false, 'projects-list');
  });
}
