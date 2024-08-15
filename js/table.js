// Function to save data to localStorage
function saveData() {
    for (let i = 0; i < 39; i++) {
        localStorage.setItem(`score${i}`, document.getElementById(`score${i}`).textContent);
        localStorage.setItem(`reward${i}`, document.getElementById(`reward${i}`).textContent);
    }
}

// Function to load data from localStorage
function loadData() {
    for (let i = 0; i < 39; i++) {
        let score = localStorage.getItem(`score${i}`) || '0';
        let reward = localStorage.getItem(`reward${i}`) || '0';
        document.getElementById(`score${i}`).textContent = score;
        document.getElementById(`reward${i}`).textContent = reward;
        updateStars(i); // Update stars when loading data
    }
}

// Function to update stars
function updateStars(index) {
    let score = parseInt(document.getElementById(`score${index}`).textContent);
    let reward = parseInt(document.getElementById(`reward${index}`).textContent);
    let starsElem = document.getElementById(`star${index}`);
    starsElem.textContent = score + reward;
}

// Update score and reward when + or - button is clicked
document.addEventListener('DOMContentLoaded', (event) => {
    loadData();

    for (let i = 0; i < 39; i++) {
        document.getElementById(`add-score${i}`).addEventListener('click', () => {
            let scoreElem = document.getElementById(`score${i}`);
            scoreElem.textContent = parseInt(scoreElem.textContent) + 1;
            updateStars(i);
            saveData();
        });

        document.getElementById(`subtract-score${i}`).addEventListener('click', () => {
            let scoreElem = document.getElementById(`score${i}`);
            let currentScore = parseInt(scoreElem.textContent);
            if (currentScore > 0) {
                scoreElem.textContent = currentScore - 1;
            }
            updateStars(i);
            saveData();
        });

        document.getElementById(`add-reward${i}`).addEventListener('click', () => {
            let rewardElem = document.getElementById(`reward${i}`);
            rewardElem.textContent = parseInt(rewardElem.textContent) + 1;
            updateStars(i);
            saveData();
        });

        document.getElementById(`subtract-reward${i}`).addEventListener('click', () => {
            let rewardElem = document.getElementById(`reward${i}`);
            let currentReward = parseInt(rewardElem.textContent);
            if (currentReward > 0) {
                rewardElem.textContent = currentReward - 1;
            }
            updateStars(i);
            saveData();
        });
    }
});
