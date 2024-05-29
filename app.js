document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;

    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const replayGame = document.getElementById('replay');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    const resetGame = () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 3;
        feedback.textContent = '';
        attemptsDisplay.textContent = `Attempts remaining: ${attempts}`;
        guessInput.value = '';
        submitGuess.disabled = false;
        guessInput.disabled = false;
    };

    submitGuess.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a valid number between 1 and 100.';
            feedback.style.color = 'red';
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            feedback.textContent = `Congratulations! You guessed the right number: ${randomNumber}`;
            feedback.style.color = 'green';
            submitGuess.disabled = true;
            guessInput.disabled = true;
        } else if (attempts === 0) {
            feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
            feedback.style.color = 'red';
            submitGuess.disabled = true;
            guessInput.disabled = true;
        } else {
            feedback.textContent = userGuess < randomNumber ? 'Too low!' : 'Too high!';
            feedback.style.color = 'orange';
        }

        attemptsDisplay.textContent = `Attempts remaining: ${attempts}`;
        guessInput.value = '';
        guessInput.focus();
    });

    replayGame.addEventListener('click', resetGame);

    resetGame();  // Initialize game state
});