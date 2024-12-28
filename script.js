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
