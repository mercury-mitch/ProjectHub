export const projectTemplate = () => `
  <div class="projects-header">
    <h5>Select a project</h5>

    <div class="projects-header-actions">
      <div class="project-search">
        <input 
          type="text" 
          id="project-search-input" 
          placeholder="Search projects" 
        />
        <i class="fal fa-search"></i>
      </div>

      <button 
        type="button" 
        class="primary" 
        id="new-project-btn"
      >
        Create
      </button>
    </div>
  </div>

  <div id="projects-list"></div>
`

export const projectItemTemplate = project => `
  <h5>${project.name}</h5>
  <div>
    <i class="fad fa-users-crown"></i>
    <i class="fad fa-megaphone"></i>
    <i class="fad fa-cog"></i>
  </div>
`

export const newProjectTemplate = () => `
  <div class="new-project">
    <form id="new-project-form">
      <div class="projects-header">
        <h5>Name your project</h5>
        <div class="new-project-actions">
          <button type="button" id="new-project-name-cancel" class="flat">Cancel</button>
          <button type="submit" id="new-project-name-next" class="primary">Next</button>
        </div>
      </div>
      
      <input type="text" id="new-project-name" />
    </form>
  </div>
`

export const projectTypes = {
  token: { label: 'Token', icon: 'coin' },
  nft: { label: 'NFT', icon: 'paint-brush' },
  exchange: { label: 'Exchange', icon: 'exchange-alt' },
  stakingPools: { label: 'Staking Pools', icon: 'swimming-pool' },
  smartContractDevelopment: { label: 'Smart Contract Development', icon: 'file-contract' },
  liquidityProvider: { label: 'Liquidity Provider', icon: 'hand-holding-water' },
}

export const projectTypesTemplate = () => `
  <div id="team">
    <div class="projects-header">
      <h5>Project Types</h5>
    </div>
    <div class="project-type-list">
      ${Object.keys(projectTypes).map((projectType, i) => `
        <button class="primary" id="${projectType}-btn">
          <i class="fad fa-${Object.values(projectTypes)[i].icon}"></i>
          ${Object.values(projectTypes)[i].label}
        </button>
      `).join('')}
    </div>
  </div>
`
