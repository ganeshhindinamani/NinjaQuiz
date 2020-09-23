const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  let score = 0

  // Check Answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show result on page


  result.classList.remove('d-none');


  scrollTo(0, 0);


  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);


  // My way
  // console.log(score);

  // const span = document.querySelector('span');
  // span.innerText = `${score}%`;

  // const result = document.querySelector('.result');
  // result.classList.remove('d-none');

});
