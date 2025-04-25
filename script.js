function toggleNavbar() {
  const menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('show');
}

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 600, // Durasi transisi dalam milidetik
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  watchOverflow: true
});

new Swiper('.trendingSwiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: '.trending-slider-section .swiper-pagination',
    clickable: true
  },
  breakpoints: {
    0:    { slidesPerView: 2 },
    768:  { slidesPerView: 3 },
    1024: { slidesPerView: 5 }
  }
});

// Series Trending
new Swiper('.seriesTrendingSwiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: '.trending-slider-section .swiper-pagination',
    clickable: true
  },
  breakpoints: {
    0:    { slidesPerView: 2 },
    768:  { slidesPerView: 3 },
    1024: { slidesPerView: 5 }
  }
});

document.querySelectorAll('.poster-container').forEach(container => {
  const poster = container.querySelector('.film-poster');
  const button = container.querySelector('.watch-btn');
  
  poster.addEventListener('click', () => {
  button.classList.add('show');
});

  button.addEventListener('click', () => {
    const link = button.getAttribute('data-link');
    window.location.href = link;
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const filmList = document.querySelector(".film-list");
  const data = JSON.parse(localStorage.getItem("filmData")) || [];

  data.forEach(film => {
    const item = document.createElement("div");
    item.className = "film-item";
    item.innerHTML = `
      <div class="poster-container">
        <img src="${film.poster}" alt="${film.judul}" class="film-poster">
        <div class="overlay"></div>
        <a class="watch-btn" href="film.html?judul=${encodeURIComponent(film.judul)}">Tonton</a>
      </div>
      <div class="film-title">${film.judul}</div>
    `;
    filmList.appendChild(item);
  });
});