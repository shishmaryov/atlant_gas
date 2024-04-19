import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

function changeActivityQuestion(el, button) {
  document.querySelector(button).addEventListener('click', () => {
    document.querySelector(el).classList.toggle('question--active');
  });
}

changeActivityQuestion('.question--1', '.question--1 .question__header');
changeActivityQuestion('.question--2', '.question--2 .question__header');
changeActivityQuestion('.question--3', '.question--3 .question__header');
changeActivityQuestion('.question--4', '.question--4 .question__header');
changeActivityQuestion('.question--5', '.question--5 .question__header');


