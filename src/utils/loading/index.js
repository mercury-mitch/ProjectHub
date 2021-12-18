export const loading = (action, target, messages) => {
  if (action && !document.querySelector(`#${target} .loading`)) {
    const elTarget = document.getElementById(target);
    if (elTarget) {
      const elLoading = document.createElement('DIV');
      // Loading is ACTIVE
      elLoading.className = 'loading';
      elLoading.innerHTML = `<div id="loading-message"></div><div id="loading-spinner"></div>`;
      
      elLoading.style.top = `${elTarget.offsetTop}px`;
      elLoading.style.left = `${elTarget.offsetLeft}px`;
      elLoading.style.height = `${elTarget.clientHeight > 150 ? elTarget.clientHeight : 150}px`;
      elLoading.style.width = `${elTarget.clientWidth}px`;
    
      elTarget.appendChild(elLoading);
      cycleMessages(messages);
    }
  }
  else {
    // Loading is INACTIVE
    document.querySelector(`#${target} .loading`)?.remove();
  }
}

const defaultMessages = [
  `Water, ice and organics, a building block for life, were found on the surface of Mercury.`, // fact
  `"In practice, I run every play like I'm scoring a touchdown." - Mercury Morris`, // quote
  `Mercury is the smallest planet in our solar system. It's a little bigger than Earth's Moon. `, // fact
  `"Money may not buy happiness, but it can damn well give it!" - Freddy Mercury`, // quote
  `The view of the Sun on Mercury's surface would appear more than three times larger than it does on Earth.`, // fact
  `"The smallest planet to revolve the Sun, beats the first of five to revolve Saturn" - Johann Wolfgang von Goethe`, // quote
  `Mercury has an atmosphere that changes with its distance to the Sun.`, // fact
  `"In horoscopes, in true romance and Playboy magazine, we lie in bed at night and search the pages for our dreams" - Eric Mercury`, // quote
  `Mercury’s eccentric orbit helped prove Einstein’s theory of relativity.`, // fact
  `"Nothing is real you know, we can recreate the world with our heart and soul." - Daniela Mercury`, // quote
  `NASA has identified 763 craters on Mercury’s surface, most named after writers, poets, and painters.`, // fact
  `"Could it be that you're actually learning to think ahead?" - Max Mercury`, // quote
  `Mercury is the fastest planet in our solar system – traveling through space at nearly 29 miles per second.`, // fact
]

const cycleMessages = msgs => {
  const elMessage = document.getElementById('loading-message');
  
  var messages = defaultMessages;
  
  if (msgs) {
    messages = msgs;
  }
  
  var count = Math.floor(Math.random() * messages.length);
  
  elMessage.classList.add('fading');
  setTimeout(() => {
    elMessage.classList.remove('fading');
  }, 600);
  
  setTimeout(() => {
    elMessage.innerText = messages[count];
  }, 400);

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
