function updateCounter() {
    const startDate = new Date('2020-01-01T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = now.getMonth() - startDate.getMonth() + years * 12;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('time').textContent = `
        ${years} anos, ${months % 12} meses, ${days % 30} dias, 
        ${hours} horas, ${minutes} minutos, ${seconds} segundos
    `;
}

setInterval(updateCounter, 1000);

const slideContainer = document.querySelector('.slide-container');
const images = [
    'foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg',
    'foto6.jpg', 'foto7.jpg', 'foto8.jpg', 'foto9.jpg'
];

slideContainer.style.width = `${images.length * 4}%`;
slideContainer.style.display = 'flex';
slideContainer.style.transition = 'transform 5.5s ease';

slideContainer.innerHTML = images.map(image => `<img src="${image}" alt="Foto" style="flex: 1 0 auto;">`).join('');

let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideContainer.style.transform = `translateX(-${currentIndex * (100 / images.length)}%)`;
}, 3000);
