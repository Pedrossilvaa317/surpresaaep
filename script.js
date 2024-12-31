function updateCounter() {
    const startDate = new Date('2020-01-01T00:00:00');
    const now = new Date(); // Usando a data atual do sistema

    let years = now.getFullYear() - startDate.getFullYear();
    const isAnniversaryPassed =
        now.getMonth() > startDate.getMonth() ||
        (now.getMonth() === startDate.getMonth() && now.getDate() >= startDate.getDate());

    if (!isAnniversaryPassed) {
        years -= 1;
    }

    const months = (years * 12) + (now.getMonth() - startDate.getMonth()) + (isAnniversaryPassed ? 0 : -1);
    const days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((now - startDate) / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor((now - startDate) / (1000 * 60)) % 60;
    const seconds = Math.floor((now - startDate) / 1000) % 60;

    document.getElementById('time').textContent = `
        ${years} anos, ${months % 12} meses, ${days % 30} dias, 
        ${hours} horas, ${minutes} minutos, ${seconds} segundos
    `;
}

setInterval(updateCounter, 1000);

const slideContainer = document.querySelector('.slide-container');
const images = [
    'foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg',
    'foto6.jpg', 'foto7.jpg', 'foto8.jpg', 'foto9.jpg', 'foto10.jpg',
    'foto11.jpg','foto12.jpg'
];

slideContainer.style.position = 'relative'; // Ajuste correto para layout
slideContainer.style.transition = 'transform 8s cubic-bezier(0.25, 0.1, 0.25, 1)'; // Transição mais lenta e suave

slideContainer.innerHTML = images.map(image => `<img src="${image}" alt="Foto" style="flex: 0 0 11.11%; height: 300px; max-height: 300px;">`).join('');

let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideContainer.style.transform = `translateX(-${currentIndex * (100 / images.length)}%)`;
}, 3000);
