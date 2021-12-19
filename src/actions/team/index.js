import { teamTabsTemplate, teamTabContentsTemplate } from "../../templates/team";
import { MercuryHub } from '../../routes/firebase/index'

export const team = () => {
  const elTeamTabs = document.getElementById('team-tabs');
  const elTeamTabContents = document.getElementById('team-tab-contents');

  elTeamTabs.innerHTML = teamTabsTemplate();
  elTeamTabContents.innerHTML = teamTabContentsTemplate();
}
