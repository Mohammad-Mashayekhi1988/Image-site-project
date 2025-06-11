// darkmode

let darkMode = document.querySelector('.dark-mode')
let change = document.querySelector('.change-dark-mode')
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark')
        change.classList.add('chang-dark')
    } else {
        localStorage.setItem('mode', 'light')
        change.classList.remove('chang-dark')
    }
})
window.onload = () => {
    let mode = localStorage.getItem('mode')
    if (mode === 'dark') {
        document.body.classList.add('dark')
    }
}

// Time & Date

// time
let time = document.querySelector('#time')
let date = document.querySelector('#date')
setInterval(update, 1000);
function update() {
    let now = new Date();
    let Hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (Hours < 10) {
        Hours = '0' + Hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    let timeUpdate = `${Hours}: ${minutes}: ${seconds}`
    time.innerText = '\u200E' + changeNumber(timeUpdate)

    // date
    let weekDay = now.toLocaleDateString('fa-IR', { weekday: 'long' });
    let monthDay = now.toLocaleDateString('fa-IR', { day: 'numeric' });
    let year = now.toLocaleDateString('fa-IR', { year: 'numeric' });
    let monthName = now.toLocaleDateString('fa-IR', { month: 'long' });

    let dateString = `${weekDay} ، ${monthDay}  ${monthName}  ${year}`;
    date.innerHTML = dateString

}
// change english number to persian number

function changeNumber(input) {
    const persianNumber = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    let outPut = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= '0' && input[i] <= '9') {
            outPut += persianNumber[input[i]]
        } else {
            outPut += input[i]
        }
    }
    return outPut
}

// Going from icon to gallery

document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', function () {
    const targetId = this.dataset.target;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// top Bottom

document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* tooltip for icons */

const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".icon").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        const text = icon.getAttribute("data-tooltip");
        tooltip.textContent = text;
        tooltip.style.opacity = 1;
        tooltip.style.transform = "translate(-50%, -130%) scale(0.95)"; // top
    });

    icon.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + "px";
        tooltip.style.top = e.pageY + "px";
    });

    icon.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
        tooltip.style.transform = "translate(-50%, 50px) scale(0.95)"; // down
    });
});

// slider

let img = document.querySelector('.img-slider')
let nextElem = document.querySelector('.next')
let prevElem = document.querySelector('.prev')

let arraySlider = ["image/slider/1.png", "image/slider/2.jpg", "image/slider/3.jpeg", "image/slider/4.webp", "image/slider/5.jpg", "image/slider/6.jpg", "image/slider/7.jpg", "image/slider/8.jpeg", "image/slider/9.jpg", "image/slider/10.jpg", "image/slider/11.jpg", "image/slider/12.jpg",]

let index = 0;
function next() {
    index--;
    if (index < 0) {
        index = arraySlider.length - 1;
    }
    img.setAttribute('src', arraySlider[index])
}

function prev() {
    index++;
    if (index > arraySlider.length - 1) {
        index = 0;
    }
    img.setAttribute('src', arraySlider[index])
}
nextElem.addEventListener('click', next)
prevElem.addEventListener('click', prev)
setInterval(next, 3000)

// modal

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        currentImages = Array.from(card.querySelectorAll('.images img')).map(img => img.src);
        if (currentImages.length > 0) {
            currentIndex = 0;
            showModalImage();
            modal.classList.remove('hidden');
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

prevBtn.addEventListener('click', () => {
    if (currentImages.length === 0) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showModalImage();
});

nextBtn.addEventListener('click', () => {
    if (currentImages.length === 0) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    showModalImage();
});

function showModalImage() {
    modalImg.src = currentImages[currentIndex];
}