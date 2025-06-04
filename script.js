/* tooltip for icons */

const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    const text = icon.getAttribute("data-tooltip");
    tooltip.textContent = text;
    tooltip.style.opacity = 1;
    tooltip.style.transform = "translate(-50%, -200%) scale(0.95)"; // بیاد بالا
  });

  icon.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = e.pageY + "px";
  });

  icon.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
    tooltip.style.transform = "translate(-50%, 50px) scale(0.95)"; // بره پایین و محو بشه
  });
});

// slider

let img=document.querySelector('.img-slider')
let nextElem = document.querySelector('.next')
let prevElem = document.querySelector('.prev')

let arraySlider =  ["image/slider/1.png", "image/slider/2.jpg","image/slider/3.jpeg", "image/slider/4.webp", "image/slider/5.jpg", "image/slider/6.jpg", "image/slider/7.jpg", "image/slider/8.jpeg", "image/slider/9.jpg", "image/slider/10.jpg", "image/slider/11.jpg", "image/slider/12.jpg", ]

let index = 0;
function next() {
  index--;
  if (index<0) {
    index = arraySlider.length -1;
  }
  img.setAttribute('src',arraySlider[index])
}

function prev() {
  index++;
  if (index>arraySlider.length-1) {
    index = 0;
  }
  img.setAttribute('src',arraySlider[index])
}
nextElem.addEventListener('click',next)
prevElem.addEventListener('click',prev)
setInterval(next , 3000)
