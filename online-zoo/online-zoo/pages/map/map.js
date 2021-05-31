const map = document.querySelector('.map-animals');
const main = document.querySelector('.main');
const icons = document.querySelectorAll('.zoo-geo__map--icon')

map.addEventListener('click', (event) => {
  const LINK = event.target.parentElement.parentElement.classList[1].split("-")[0];
  if (event.target.parentElement.classList.contains('stroke')) {
    icons.forEach((el) => {
      if (el.classList.contains('open')) {
        el.classList.remove('open');
      }
    });
    event.target.parentElement.parentElement.classList.add('open');
    document.querySelector(".zoo-geo__card--link").href = `../../pages/zoos/${LINK}.html`
  }
});

window.onclick = function(event) {
  if (event.target === main || event.target === map) {
    icons.forEach((el) => {
      el.classList.remove('open');
    })
  }
}