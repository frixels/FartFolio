document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    const rainContainer = document.getElementById('raindrops');
    rainContainer.id = 'raindrops';
    rainContainer.className = 'raindrops';

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        const width = Math.random() * 1.1 + 1;
        const height = Math.random() * 5 + 20;
        raindrop.style.width = `${width}px`;
        raindrop.style.height = `${height}px`;

        const left = Math.random() * window.innerWidth;
        raindrop.style.left = `${left}px`;

        const animationDuration = Math.random() * 0.5 + 0.5;
        raindrop.style.animationDuration = `${animationDuration}s`;

        rainContainer.appendChild(raindrop);
        
        setTimeout(() => {
            raindrop.remove();
        }, animationDuration * 1000);
    }

    let raindropInterval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
            createRaindrop();
        }
    }, 40);

    container.style.display = 'flex';
});
