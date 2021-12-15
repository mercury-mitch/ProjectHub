export const projectTypes = {
  token: { label: 'Token', icon: 'coin' },
  nft: { label: 'NFT', icon: 'paint-brush' },
  exchange: { label: 'Exchange', icon: 'exchange-alt' },
  stakingPools: { label: 'Staking Pools', icon: 'swimming-pool' },
  smartContractDevelopment: { label: 'Smart Contract Development', icon: 'file-contract' },
  liquidityProvider: { label: 'Liquidity Provider', icon: 'hand-holding-water' },
}

export const teamTemplate = () => `
  ${projectTypesTemplate()}
`

const projectTypesTemplate = () => `
  <div id="team">
    <h3>Project Types</h3>
    <div class="project-type-list">
      ${Object.keys(projectTypes).map((projectType, i) => `
        <button id="${projectType}-btn">
          <i class="fad fa-${Object.values(projectTypes)[i].icon}"></i>
          ${Object.values(projectTypes)[i].label}
        </button>
      `).join('')}
    </div>
  </div>
`
