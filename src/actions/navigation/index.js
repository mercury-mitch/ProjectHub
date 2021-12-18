import { mountHome } from '../../mounts/home/index.js';
import { actions } from '../index.js'

const initialActions = {
  userscrown: "team",
  megaphone: "marketing",
  cog: "settings"
}

export const navigation = (project, initialAction) => {
  const navListItems = document.querySelectorAll('#navigation-list-tab button');
  const navListContentItems = document.querySelectorAll('#navigation-nav-tabContent li');
  const elAllProjectsBtn = document.getElementById('all-projects-btn');

  // // Trigger initial actions
  let selected = 'dashboard';
  
  if (initialAction) {
    if (initialActions[initialAction.replace('-', '')]) {
      selected = initialActions[initialAction.replace('-', '')];
      
      actions[selected](project);
    }
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
        // Remove class: "active" from all navListItems
        navListItems.forEach(i => i.classList.remove('active'));
        
        // Remove class: "active" from all navListContentItems
        navListContentItems.forEach(i => i.classList.remove('active'));
        
        // Add class: "active" to navItem selected
        let el = e.target;
        if (!e.target.id) el = e.target.parentElement;
        el.classList.add('active');
        
        // Add class: "active" to contentItem associated with selection
        document.getElementById(el.id.slice(0, -5)).classList.add('active');

        // Trigger actions associated with navItem selected
        actions[navItem.id.slice(16, -5)](project);
      }
  });
}
