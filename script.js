
function showPreloader() {
    document.querySelector('.PreLoader').classList.remove('invisible');
    document.body.classList.add('no-scroll');
}

function PageLoad() {
    const preloader = document.querySelector('.PreLoader');
    const body = document.body;
    preloader.classList.add('invisible');
    body.classList.remove("no-scroll");
    document.querySelector('.navbar').classList.add('visible');
    document.querySelector('.video-background').classList.add('visible');
    playIntroAnimation();
    setTimeout(function() {
      document.getElementById('myInput').classList.add('visible')
      document.querySelector('.btn-search').classList.add('visible')
    }, 1000);

    preloader.addEventListener('transitionend', function() {
        preloader.classList.add('hidden');
})};

window.onload = function() {
  document.querySelector('.PreLoader').classList.remove('hidden')
};

window.addEventListener('load', function() {
    setTimeout(PageLoad, 2000);
});

const html = document.documentElement;
const canvas = document.getElementById("bgv");
const context = canvas.getContext("2d");
const introFrameCount = 175;

const frameCount = 285;
var currentFrame = index => (
  `/Assets/spinner-3d-v3/${index.toString().padStart(4, '0')}.png`
)




const playIntroAnimation = () => {

  const introFrameCount = 180;
  let currentIntroFrame = 1;

  const playFrame = () => {
    if (currentIntroFrame <= introFrameCount) {
      upimage(currentIntroFrame);
      currentIntroFrame++;
      requestAnimationFrame(playFrame);
    }
};

const upimage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

  playFrame();
};


const preloadImages = () => {
  for (let i = 1; introFrameCount < i && i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i + introFrameCount);
  }
};

preloadImages();



const img = new Image()
img.src = currentFrame(1);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
img.onload=function(){
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

const updateImage = index => {
  img.src = currentFrame(index + introFrameCount);
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * (frameCount))
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});
  
////////////////////////////
//SearchBar scroll reactive
/////////////////////////////
window.addEventListener('scroll', () => {
  const element = document.querySelector('#myInput');
  const threshold = 200;
  
  const rect = element.getBoundingClientRect();

  if (rect.top <= threshold) {

    document.getElementById('myInput').classList.remove('visible')
    document.querySelector('.btn-search').classList.remove('visible')
  }
  if (rect.top > threshold) {
    document.getElementById('myInput').classList.add('visible')
    document.querySelector('.btn-search').classList.add('visible')
  }
});