import { MercuryHub }    from '../../../routes/firebase'
import { MercuryCharts } from "../../utils/charts";


export const dashboard = project => {
  // Set the Project Name in the title
  const projectNameElements = document.querySelectorAll(`[data-role="dashboard-project-name"]`);
  projectNameElements.forEach(el => el.innerText = project.name);
  
  // Load the Roadmap Chart
  MercuryHub.GET(`projects/${project.id}/tasks`)
            .then(response => MercuryCharts.RoadMap(response, 'roadmapChart'));
  
  // 
}
