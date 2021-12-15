import { projectTypes } from "../../templates/team"
import { loading }      from "../loading"


export const team = () => {
  // Trigger actions
  Object.keys(projectTypes).map((projectType, i) => {
    document.getElementById(`${projectType}-btn`)
      .onclick = () => {
        createProject(Object.values(projectTypes)[i])
      }
  })
}

const createProject = data => {
  loading(true, 'navigation-nav-tabContent')
}
