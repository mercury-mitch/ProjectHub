import { addElementToRoot } from '../../utils/RootHelpers'
import { templates }        from '../../templates'
import { actions }          from '../../actions'


export const mountHome = () => {
  document.getElementById('root').innerHTML = '';
  
  addElementToRoot('home')
    .then(() => {
      addElementToRoot('project')
        .then(elProject => { 
          elProject.innerHTML = templates.projectTemplate();
          actions.project();
        })
    })
}
