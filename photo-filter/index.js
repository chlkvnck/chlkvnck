const ROOT = getComputedStyle(document.querySelector(":root"));
const ROOT_VALUES = [
  ROOT.getPropertyValue("--blur"), 
  ROOT.getPropertyValue("--invert"), 
  ROOT.getPropertyValue("--sepia"), 
  ROOT.getPropertyValue("--saturate"), 
  ROOT.getPropertyValue("--hue")
];
let imgCount = 1;


const fileInput = document.querySelector("input[type='file']");
const canvas    = document.querySelector("canvas");
const image     = document.querySelector("img");
const filters   = document.querySelector(".filters");

const labels  = filters.querySelectorAll("label"); 
const inputs  = filters.querySelectorAll("input");
const outputs = filters.querySelectorAll("output");


const changeValue = (e) => {
  const label  = e.currentTarget; 
  const input  = label.children[0]; 
  const output = label.children[1];

  output.value = input.value;
  document.documentElement.style.setProperty(`--${input.name}`, input.value + input.dataset.sizing);
}


const loadImage = () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => { image.src = reader.result; }
  reader.readAsDataURL(file);
  fileInput.value = "";
}


const nextImage = () => {
  const Time = new Date().getHours();
  const countStr = (imgCount < 10 ? `0${imgCount}` : `${imgCount}`) + ".jpg?raw=true";
  imgCount = imgCount === 20 ? 1 : imgCount + 1;
  let daytime;

  if (Time < 6) { daytime = "night/"; } 
  else if (Time >= 6  && Time < 12)  { daytime = "morning/"; } 
  else if (Time >= 12 && Time < 18)  { daytime = "day/"; } 
  else if (Time >= 18 && Time <= 23) { daytime = "evening/"; } 
  image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${daytime}${countStr}`; 
}


const resetImage = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ROOT_VALUES[i].replace(/[\D]/g,"");
    document.documentElement.style.setProperty(`--${inputs[i].name}`, inputs[i].value + inputs[i].dataset.sizing);
    outputs[i].value = inputs[i].value;
  }
}


const saveImage = () => {
  const img = new Image();

  img.setAttribute("crossOrigin", "anonymous");
  img.src = image.src;
  img.onload = function() {
    const link = document.createElement("a");

    canvas.width  = img.width;
    canvas.height = img.height;
    canvas.getContext("2d").filter = 
      `blur(${String(Number(ROOT.getPropertyValue("--blur").replace(/[\D]/g,"")) * (img.naturalHeight / image.height))}px)
      invert(${ROOT.getPropertyValue("--invert")}) sepia(${ROOT.getPropertyValue("--sepia")}) 
      saturate(${ROOT.getPropertyValue("--saturate")}) hue-rotate(${ROOT.getPropertyValue("--hue")})`;
    canvas.getContext("2d").drawImage(img, 0, 0);

    link.download = "image.png";
    link.href = canvas.toDataURL();
    link.click(); link.delete;
  }
}


const fullScreen = () => {
  if (!document.fullscreenElement) { document.documentElement.requestFullscreen(); }
  else if (document.fullscreenEnabled) { document.exitFullscreen(); }
}


labels.forEach(label => label.addEventListener("input", changeValue));
fileInput.addEventListener("change", loadImage);

document.querySelector(".btn-next").addEventListener("click", nextImage);
document.querySelector(".btn-reset").addEventListener("click", resetImage);
document.querySelector(".btn-save").addEventListener("click", saveImage);
document.querySelector(".fullscreen").addEventListener("click", fullScreen);
