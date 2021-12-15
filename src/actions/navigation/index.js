import { actions } from '../index.js'

export const navigation = project => {
  console.log(project)
  const navListItems = document.querySelectorAll('#navigation-list-tab button');
  const navListContentItems = document.querySelectorAll('#navigation-nav-tabContent li');
  const elActiveProject = document.getElementById('active-project');

  // Trigger initial actions
  actions.team();

  // Set project info
  elActiveProject.innerText = project.name;

  navListItems.forEach(navItem => {
    document.getElementById(navItem.id)
      .onclick = e => {
        // Remove class: "active" from all navListItems
        navListItems.forEach(i => i.classList.remove('active'));
        
        // Remove class: "active" from all navListContentItems
        navListContentItems.forEach(i => i.classList.remove('active'));
        
        // Add class: "active" to navItem selected
        e.target.classList.add('active');
        
        // Add class: "active" to contentItem associated with selection
        document.getElementById(e.target.id.slice(0, -5)).classList.add('active');

        // Trigger actions associated with navItem selected
        actions[navItem.id.slice(16, -5)]();
      }
  });
}
