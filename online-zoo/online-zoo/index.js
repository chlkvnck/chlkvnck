window.addEventListener('scroll', function () {
  if (window.screen.width > 1919 && window.scrollY > 4700) { document.querySelector("aside").style.zIndex = '-1'; }
  else if (window.screen.width > 1199 && window.screen.width < 1920 && window.scrollY > 4010) { document.querySelector("aside").style.zIndex = '-1'; }
  else { document.querySelector("aside").style.zIndex = '1'; }
})

const map = document.querySelector('.zoo-geo__map');
const icons = document.querySelectorAll('.zoo-geo__map--icon');
const card = document.querySelector(".zoo-geo__card");
const card_link = card.querySelector('.zoo-geo__card--link');
const formContainer = document.querySelector('.form__container');
const sendBtn = formContainer.querySelector('.feedback__container--btn')
const inputs = formContainer.querySelectorAll('input');
const feedbackArticleBtn = document.querySelector(".test__button--feedback");

map.addEventListener('click', (event) => {
  const LINK = event.target.parentElement.parentElement.classList[1].split("-")[0];
  if (event.target.parentElement.classList.contains('stroke')) {
    icons.forEach((el) => {
      if (el.classList.contains('open')) {
        el.classList.remove('open');
      }
    });
    event.target.parentElement.parentElement.classList.add('open');
    document.querySelector(".zoo-geo__card--link").href = `../online-zoo/pages/zoos/${LINK}.html`
  }
});

feedbackArticleBtn.addEventListener('click', () => {
  formContainer.classList.remove('hidden');
});

window.onclick = function(event) {
  if (event.target === formContainer) {
    formContainer.classList.add('hidden');
  }
}

inputs.forEach(input => input.addEventListener('input', () => {
  let flag = true;
  inputs.forEach(input => {
    if (!input.validity.valid) flag = false
  })

  if (flag) { sendBtn.classList.add('feedback__container--active')
  } else try { sendBtn.classList.remove('feedback__container--active') 
    } catch (e) { }
}));

/*
let counter = 0;
document.querySelector(".pets__button--right").addEventListener("click", () => slide(++counter));
document.querySelector(".pets__button--left").addEventListener("click", () => slide(--counter));

function slide(n) {
  if (n === 4) counter = 0;  
  else if (n === -1) counter = 3;
  else counter = n;
  console.log(counter);
  
  let petsCard = document.getElementsByClassName('pets__card');
  petsCard[3].style.gridRowStart = '2';
  petsCard[7].style.display = 'none';
}*/

const next = document.querySelector(".pets__button--right");
const prev = document.querySelector(".pets__button--left");

const slidesTop = document.querySelector('.firstCarousel').getElementsByClassName("pets__card");
const slidesBottom = document.querySelector('.secondCarousel').getElementsByClassName("pets__card");

let car = [];
let scroll;

const slides = (e) => {
  for (let i = 0; i < slidesTop.length; i++) {
    slidesTop[i].style.display = "none";
    slidesBottom[i].style.display = "none";
  }
  for(let i = 0;i < scroll; i++){
    if (e.currentTarget.classList.contains('pets__button--left')) {
      car[i] = car[i] - 1 === -1 ? slidesTop.length - 1 : car[i] - 1
    } else { car[i] = car[i] + 1 === slidesTop.length ? 0 : car[i] + 1 }

    slidesTop[car[i]].style.display = "block";
    slidesBottom[car[i]].style.display = "block";
    slidesTop[car[i]].style.gridColumnStart = `${i+1}`;
    slidesTop[car[i]].style.gridRowStart = `${1}`;
    slidesBottom[car[i]].style.gridColumnStart = `${i+1}`;
    slidesBottom[car[i]].style.gridRowStart = `${1}`;
  }
}

(function calcScroll() {
  if (window.outerWidth >= 1200 && window.outerWidth < 1920)
    scroll = 2;
  else scroll = 3;
})();

(function createCar() {
  for (let i = 0; i < scroll; i++){
    car[i] = i;
  }
})();

next.addEventListener('click', slides);
prev.addEventListener('click', slides);
