export const loading = (action, target, messages) => {
  if (action) {
    const elTarget = document.getElementById(target);
    const elLoading = document.createElement('DIV');
    // Loading is ACTIVE
    elLoading.className = 'loading';
    elLoading.innerHTML = `<div id="loading-message"></div>`;
    
    elLoading.style.top = `${elTarget.offsetTop}px`;
    elLoading.style.left = `${elTarget.offsetLeft}px`;
    elLoading.style.height = `${elTarget.clientHeight}px`;
    elLoading.style.width = `${elTarget.clientWidth}px`;
  
    elTarget.appendChild(elLoading);
    cycleMessages(messages);
  }
  else {
    // Loading is INACTIVE
    document.querySelector(`#${target} .loading`).remove();
  }
}

const defaultMessages = [
  `Mercury is the smallest planet in our solar system. It's a little bigger than Earth's Moon. `,
  `"The smallest to revolve the sun, beats the first to revolve Saturn" - Johann Wolfgang von Goethe`,
  `Water, ice and organics, a building block for life, were found on the surface of Mercury.`,
  `Mercury has an atmosphere that changes with its distance to the Sun.`,
  `"Money may not buy happiness, but it can damn well give it!" - Freddy Mercury`,
  `Mercury’s eccentric orbit helped prove Einstein’s theory of relativity.`,
]

const cycleMessages = msgs => {
  const elMessage = document.getElementById('loading-message');
  
  var messages = defaultMessages;
  
  if (msgs) {
    messages = msgs;
  }
  
  var count = Math.floor(Math.random() * messages.length);

  elMessage.innerText = messages[count];

  setInterval(() => {
    count = count + 1;
    if (count >= messages.length) {
      count = 0;
    }

    var newMsg = messages[count];
    
    elMessage.classList.add('fading');
    setTimeout(() => {
      elMessage.classList.remove('fading');
    }, 600);
    
    setTimeout(() => {
      elMessage.innerText = newMsg; 
    }, 300);

  }, 4500);
}
