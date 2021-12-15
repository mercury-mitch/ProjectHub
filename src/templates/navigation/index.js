import { teamTemplate }      from '../team'
import { projectTemplate }   from '../project'
import { marketingTemplate } from '../marketing'


const navigationItems = {
  team:      { title: 'Team',      icon: 'users-crown', content: teamTemplate() },
  project:   { title: 'Projects',  icon: 'tasks', content: projectTemplate() },
  marketing: { title: 'Marketing', icon: 'megaphone', content: marketingTemplate() }
}

{/* <nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div class="row navbar-row">
        <div class="col-md-4 col-lg-3 navbar-row-col">
          <div class="nav-logo">
            <i class="fad fa-planet-ringed fa-2x"></i>
            <h5>Mercury Hub</h5>
          </div>
        </div>
        <div class="col-sm-12 col-md-8 col-lg-9"></div>
      </div>
    </div>
  </div>
</nav> */}
export const navigation = () => `
  <div class="row navigation-content">
    <div class="col-md-4 col-lg-3 navigation-list">
      <div class="list-group" id="navigation-list-tab" role="tablist">
        ${Object.keys(navigationItems).map((navigationItem, i) => `
          <button 
            class="list-group-item list-group-item-action ${i === 0 ? 'active' : ''}" 
            id="navigation-list-${navigationItem}-list" 
            data-bs-toggle="list" 
            role="tab" 
            aria-controls="navigation-list-${navigationItem}"
          >
            <i class="fad fa-${Object.values(navigationItems)[i].icon}"></i>
            ${Object.values(navigationItems)[i].title}
          </button>
        `).join('')}
        </div>
    </div>
    <div class="col-sm-12 col-md-8 col-lg-9 tab-content-col">
      <ul class="tab-content" id="navigation-nav-tabContent">
      ${Object.keys(navigationItems).map((navigationItem, i) => `
        <li class="tab-pane fade show ${i === 0 ? 'active' : ''}" id="navigation-list-${navigationItem}" role="tabpanel" aria-labelledby="navigation-list-${navigationItem}-list">${Object.values(navigationItems)[i].content}</li>
      `).join('')}
      </ul>
    </div>
  </div>
`
