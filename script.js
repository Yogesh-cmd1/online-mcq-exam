function submitExam() {
    const answers = {
        question1: 'a',
        question2: 'c',
        question3: 'c',
        question4: 'c',
        question5: 'c',
        question6: 'c'
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your score is ${score}/${totalQuestions}.</p>`;
}
