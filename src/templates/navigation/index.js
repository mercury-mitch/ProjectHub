import { teamTemplate }      from '../team'
import { settingsTemplate }  from '../settings'
import { marketingTemplate } from '../marketing'
import { dashboardTemplate } from '../dashboard'


const navigationItems = {
  dashboard: { 
    title: 'Dashboard', 
    icon: 'tachometer-alt', 
    content: dashboardTemplate()
  },
  team: { 
    title: 'Team', 
    icon: 'users-crown', 
    content: teamTemplate() 
  },
  marketing: { 
    title: 'Marketing', 
    icon: 'megaphone', 
    content: marketingTemplate() 
  },
  settings: { 
    title: 'Settings', 
    icon: 'cog', 
    content: settingsTemplate() 
  }
}

export const navigation = () => `
  <h3 class="project-name desktop" data-role="dashboard-project-name"></h3>

  <div class="navigation-content">
    <div class="navigation-list-container">
      <div class="navigation-list">
        <div class="list-group" id="navigation-list-tab" role="tablist">
          <button 
            class="list-group-item list-group-item-action" 
            id="navigation-list-hamburger"
          >
            <i class="fal fa-bars"></i>
            </span>
          </button>
          ${Object.keys(navigationItems).map((navigationItem, i) => `
            <button 
              class="list-group-item list-group-item-action" 
              id="navigation-list-${navigationItem}-list" 
              data-bs-toggle="list" 
              role="tab" 
              aria-controls="navigation-list-${navigationItem}"
            >
              <i class="fad fa-${Object.values(navigationItems)[i].icon}"></i>
              <span class="navigation-list-item-title">
              ${Object.values(navigationItems)[i].title}
              </span>
            </button>
          `).join('')}
        </div>
        <div class="list-group" id="navigation-list-project" role="tablist">
          <i class="fad fa-globe-americas list-group-item" id="all-projects-btn"></i>
        </div>

      </div>
      
      <h3 class="project-name mobile" data-role="dashboard-project-name"></h3>
    </div>
    <div class="tab-content-col">
      <ul class="tab-content" id="navigation-nav-tabContent">
      ${Object.keys(navigationItems).map((navigationItem, i) => `
        <li 
          role="tabpanel" 
          id="navigation-list-${navigationItem}" 
          class="tab-pane fade show" 
          aria-labelledby="navigation-list-${navigationItem}-list"
        >
            ${Object.values(navigationItems)[i].content}
        </li>
      `).join('')}
      </ul>
    </div>
  </div>
`
