document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('home-page');
    const container = document.querySelector('.container');

    function createSnowflake() {
        const snowflakesContainer = document.getElementById('snowflakes');
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const size = Math.random() * 5 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        const left = Math.random() * window.innerWidth;
        snowflake.style.left = `${left}px`;

        const animationDuration = Math.random() * 5 + 5;
        snowflake.style.animationDuration = `${animationDuration}s`;

        snowflakesContainer.appendChild(snowflake);
    }

    let snowflakeInterval = setInterval(() => {
        createSnowflake();
    }, 50);

    setTimeout(() => {
        clearInterval(snowflakeInterval);
    }, 10000);

    homePage.style.display = 'none';
    container.style.display = 'flex';
});
