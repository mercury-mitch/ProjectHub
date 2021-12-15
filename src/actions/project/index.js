import { getProjects } from "../../../routes/firebase";
import { loading } from "../loading";


export const project = () => {
  // Start Loading
  loading(true, 'navigation-nav-tabContent');

  // Fetch Projects
  getProjects().then(data => {
    // Set Projects list
    document.getElementById('projects-list').innerHTML = data.map(project => `
      <div class="project-item">
        <h5>${project.name}</h5>
      </div>
    `).join('');
    
    // Stop Loading
    loading(false, 'navigation-nav-tabContent');
  });
}
