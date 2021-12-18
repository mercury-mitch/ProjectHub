import { mountHome } from '../../mounts/home/index.js';
import { mountMobileNavigation } from '../../mounts/mobileNavigation/index.js';
import { actions } from '../index.js'


export const navigation = (project, initialAction) => {
  console.log(initialAction)
  const navListItems = document.querySelectorAll('#navigation-list-tab button');
  const navListContentItems = document.querySelectorAll('#navigation-nav-tabContent li');
  const elAllProjectsBtn = document.getElementById('all-projects-btn');

  // // Trigger initial actions
  let selected = 'dashboard';
  
  if (initialAction) {
    selected = initialAction;
    actions[selected](project);
  }
  else {
    actions.dashboard(project);
  }
  
  const elNavItemSelected = document.getElementById(`navigation-list-${selected}`)
  const elNavContentSelected = document.getElementById(`navigation-list-${selected}-list`)
  elNavItemSelected.classList.toggle('active');
  elNavContentSelected.classList.toggle('active');

  // Redirect to All Projects menu
  elAllProjectsBtn.onclick = () => mountHome();

  navListItems.forEach(navItem => {
    document.getElementById(navItem.id)
      .onclick = e => {
        let el = e.target;
        if (!e.target.id) el = e.target.parentElement;

        
        if (el.id.includes('hamburger')) {
          mountMobileNavigation(project);
        }
        else {
          // Remove class: "active" from all navListItems
          navListItems.forEach(i => i.classList.remove('active'));
          
          // Remove class: "active" from all navListContentItems
          navListContentItems.forEach(i => i.classList.remove('active'));
          
          // Add class: "active" to navItem selected
          el.classList.add('active');
          
          // Add class: "active" to contentItem associated with selection
          const contentItem = document.getElementById(el.id.slice(0, -5));
          contentItem.classList.add('active');
  
          // Trigger actions associated with navItem selected
          actions[navItem.id.slice(16, -5)](project);
        }
      }
  });
}
