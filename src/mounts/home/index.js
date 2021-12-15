import { addElementToRoot } from '../../utils/RootHelpers'
import { templates }        from '../../templates'
import { actions }          from '../../actions'


export const mountHome = () => {
  addElementToRoot('home')
    .then(() => {
      // Start Mounting Functions Here
      addElementToRoot('navigation')
        .then(elNavigation => {
          elNavigation.innerHTML = templates.navigation();
          actions.navigation();
        })
    })
}
