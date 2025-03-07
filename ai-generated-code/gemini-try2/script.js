const namesInput = document.getElementById('names');
const pickWinnerButton = document.getElementById('pickWinner');
const winnerDisplay = document.getElementById('winner');
const confettiContainer = document.querySelector('.confetti-container');
const winnerSound = document.getElementById('winnerSound');

pickWinnerButton.addEventListener('click', () => {
    const names = namesInput.value.split('\n').filter(name => name.trim() !== '');
    if (names.length === 0) {
        alert('Please enter names!');
        return;
    }

    const winner = names[Math.floor(Math.random() * names.length)];
    winnerDisplay.textContent = `The winner is: ${winner}!`;
    winnerSound.play();
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}