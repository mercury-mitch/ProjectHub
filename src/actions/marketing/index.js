import { MercuryHub } from "../../routes/firebase";

export const marketing = project => {
  const elCreateCampaign = document.getElementById('create-marketing-campaign');
  const elCampaignForm = document.getElementById('marketing-campaign-form');
  
  elCreateCampaign.onclick = () => {
    elCampaignForm.classList.remove('hide');
  }
  
  elCampaignForm.onsubmit = e => {
    e.preventDefault();
    
    const formData = new FormData(elCampaignForm);
    
    let postData = {};
    
    for (var pair of formData.entries()) postData[pair[0]] = pair[1];
    
    // Create the new task
    MercuryHub.POST(`projects/${project.id}/tasks`, postData)
      .then(response => {});
  }
}
