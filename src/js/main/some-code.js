document.addEventListener('click', (event) => {
  if (!event.target.matches('#click-me')) return;
  alert('You clicked me!');
}, false);
