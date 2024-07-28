function submitExam() {
    const answers = {
        question1: 'a',
        question2: 'c',
        question3: 'c',
        question4: 'c',
        question5: 'c',
        question6: 'd'
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    const resultMessage = `Your score is ${score}/${totalQuestions}.`;
    document.getElementById('resultMessage').textContent = resultMessage;

    // Show the popup
    document.getElementById('resultPopup').classList.remove('hidden');
}

// Close the popup when clicking on the close button
document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('resultPopup').classList.add('hidden');
});

// Close the popup when clicking outside of the popup content
window.addEventListener('click', (event) => {
    const popup = document.getElementById('resultPopup');
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});
