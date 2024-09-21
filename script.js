        const button = document.getElementById('flowerButton');
        const body = document.body;

        button.addEventListener('click', () => {
            for (let i = 0; i < 100; i++) {
                createFlower();
            }
        });

        function createFlower() {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = '🌻';
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDuration = Math.random() * 3 + 2 + 's';
            body.appendChild(flower);

            setTimeout(() => {
                body.removeChild(flower);
            }, 5000);
        }