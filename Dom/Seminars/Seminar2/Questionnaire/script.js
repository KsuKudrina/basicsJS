const questions = document.querySelectorAll('.question');
const submitBtn = document.getElementById('submit');
const result =document.querySelector('.result');
const answers = document.querySelector('.answers');

submitBtn.addEventListener('click', () => {
    const resultsHtml = [];
    questions.forEach((questionEl, index) => {
        const inputCheck = questionEl.querySelector('input:checked');
        console.log(inputCheck);
        
        questionEl.classList.toggle('not-checked', !inputCheck);

        if(inputCheck){
            resultsHtml.push(`<p data-quest="${index + 1}">Ответ ${index + 1}: <span>${inputCheck.value}</span></p>`)
        }
    });
    console.log(resultsHtml);
    if (resultsHtml.length === questions.length) {
        answers.innerHTML = resultsHtml.join('');
        result.style.removeProperty('display')
        submitBtn.disabled = true;
    }
});

