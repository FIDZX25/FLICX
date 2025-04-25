// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const judul = urlParams.get('judul');
const genre = urlParams.get('genre');
const video = urlParams.get('video');
const desc = urlParams.get('desc');
const rating = urlParams.get('rating');
const durasi = urlParams.get('durasi');
const tahun = urlParams.get('tahun');
const negara = urlParams.get('negara');
const sutradara = urlParams.get('sutradara');
const pemain = urlParams.get('pemain');

// Update konten halaman
document.getElementById('judul').textContent = judul;
document.getElementById('genre').textContent = genre;
document.getElementById('deskripsi').textContent = desc;
document.getElementById('rating').textContent = rating;
document.getElementById('durasi').textContent = durasi;
document.getElementById('tahun').textContent = tahun;
document.getElementById('negara').textContent = negara;
document.getElementById('sutradara').textContent = sutradara;
document.getElementById('pemain').textContent = pemain;

// Bikin iframe dari link video
const videoContainer = document.getElementById('videoContainer');

const iframe = document.createElement('iframe');
iframe.src = `https://onlineplayer.online/player.html?url=${encodeURIComponent(video)}&poster=&autoplay=false&loop=false&muted=false&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true`;
iframe.allow = 'autoplay; fullscreen';
iframe.scrolling = 'no';
iframe.frameBorder = '0';

videoContainer.appendChild(iframe);