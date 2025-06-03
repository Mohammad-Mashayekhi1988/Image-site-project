/* tooltip for icons */

const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    const text = icon.getAttribute("data-tooltip");
    tooltip.textContent = text;
    tooltip.style.opacity = 1;
    tooltip.style.transform = "translate(-50%, -100%) scale(0.95)"; // بیاد بالا
  });

  icon.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = e.pageY + "px";
  });

  icon.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
    tooltip.style.transform = "translate(-50%, 10px) scale(0.95)"; // بره پایین و محو بشه
  });
});



let arraySlider =  ["image/slider/1.webp", "image/slider/2.jpg","image/slider/3.jpeg", "image/slider/4.webp", "image/slider/5.jpg", "image/slider/6.jpg", "image/slider/7.jpg", "image/slider/8.jpeg", "image/slider/9.jpg", "image/slider/10.jpg", "image/slider/11.jpg", "image/slider/12.jpg", ]





