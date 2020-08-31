const handleToggle = (el) => (el.onclick = () => el.classList.toggle('active'));
const toggle = document.querySelector('.menu');
handleToggle(toggle);

const position = document.documentElement;
position.addEventListener('mousemove', (e) => {
  position.style.setProperty('--x', e.clientX + 'px');
  position.style.setProperty('--y', e.clientX + '%');
});
