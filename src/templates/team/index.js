
export const teamTemplate = () => `
  <ul id="team-tabs" class="nav nav-tabs"></ul>

  <div id="team-tab-contents" class="tab-content"></div>
`

export const teamTabsTemplate = (project, teams) => `
  <li><a class="active" data-toggle="tab" href="#projectManagers">Project Managers</a></li>
`

export const teamTabContentsTemplate = (project, teams) => `
  <div id="projectManagers" class="tab-pane fade in active show">
    <div class="row">
      <div class="col-lg-12">
        project managers list
      </div>
    </div>
  </div>
`
