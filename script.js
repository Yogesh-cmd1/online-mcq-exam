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
        if (selectedAnswer) {
            console.log(`Question: ${question}, Selected Answer: ${selectedAnswer.value}`);
            if (selectedAnswer.value === answers[question]) {
                score++;
            }
        } else {
            console.log(`Question: ${question}, No Answer Selected`);
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your score is ${score}/${totalQuestions}.</p>`;
}
