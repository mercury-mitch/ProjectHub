import { getProjects } from "../../../routes/firebase";


export const project = () => {
  getProjects().then(data => {
    document.getElementById('projects-list').innerHTML = data.map(project => `
      <div class="project-item">
        <h5>${project.name}</h5>
      </div>
    `);
  });
}
