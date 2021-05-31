window.addEventListener('scroll', function () {
  if (window.screen.width >= 640 && window.scrollY > 2520) { document.querySelector("aside").style.zIndex = '-1'; }
  else if (window.screen.width < 640 && window.scrollY > 2800) { document.querySelector("aside").style.zIndex = '-1'; }
  else { document.querySelector("aside").style.zIndex = '1'; }
})

const spoiler = document.querySelectorAll('.facts__card');
spoiler.forEach((ev) => {
  ev.querySelector('.facts__card--button').addEventListener('click', (event) => {
    event.target.closest('.facts__card').classList.toggle('open');
  });
});


const otherCamsGrid = document.querySelector('.other-cams__grid');
const videos = otherCamsGrid.querySelectorAll('.viewers__caption--button');
let mainCam = document.querySelector('.cam-main');

const changeVideo = (e) => {
  let link = e.target.parentElement.children[2];
  const temp = link.href;
  link.href = mainCam.src;
  mainCam.src = temp;
}

videos.forEach(video => video.addEventListener('click',changeVideo))

