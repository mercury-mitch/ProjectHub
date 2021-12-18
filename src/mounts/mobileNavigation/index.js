import { actions } from "../../actions";
import { templates } from "../../templates";

const toggleHmbgr = () => {
  const hmbgrIcon = document.querySelector('#navigation-list-hamburger i');

  if (hmbgrIcon.classList.contains('fa-bars')) {
    hmbgrIcon.classList.remove('fa-bars');
    hmbgrIcon.classList.add('fa-times');
  }
  else {
    hmbgrIcon.classList.remove('fa-times');
    hmbgrIcon.classList.add('fa-bars');
  }
}

export const mountMobileNavigation = project => {
  const elRoot = document.getElementById('root');
  const elHmbgr = document.getElementById('navigation-list-hamburger');
  
  let elMobileNav = document.createElement('DIV');;
  
  if (document.getElementById('mobile-nav')) {
    elMobileNav = document.getElementById('mobile-nav');
  }
  else {
    elMobileNav.id = 'mobile-nav';
    
    elRoot.prepend(elMobileNav);
  }
  
  elRoot.classList.add('mobile-nav');
  
  elMobileNav.innerHTML = templates.mobileNavigation();
  
  toggleHmbgr();
  elHmbgr.onclick = () => {
    elRoot.classList.toggle('mobile-nav');
    toggleHmbgr();
  }
  
  const elMobileNavItems = document.querySelectorAll('#mobile-nav');
  
  elMobileNavItems.forEach(item => {
    item.onclick = e => {
      elRoot.classList.toggle('mobile-nav');
      toggleHmbgr();
      actions.navigation(project, e.target.id);
    }
  })
}
