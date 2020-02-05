import '../licenses.txt';
import paySystem from './PaySystem.js';
import validateNum from './ValidateNum.js';
import choiceCardImg from './ChoiceCardImg.js';

const formCard = document.querySelector('.valid-card');
const inputText = document.getElementById('input');

inputText.addEventListener('keypress', (event) => {
  event.preventDefault();
  if(event.key.search(/\d/) !== -1) {
    inputText.value = inputText.value + event.key;
    choiceCardImg(paySystem(inputText.value));
  }

  if(event.key === 'Enter') {
    validateCard(inputText.value);
  }
});

formCard.addEventListener('submit', (event) => {
  event.preventDefault();
  validateCard(inputText.value);
});

inputText.addEventListener('input', (event) => {
  choiceCardImg(paySystem(inputText.value));
});

function validateCard(numCard) {
  if (numCard.length < 1 || !validateNum(numCard)) {
    inputText.className = 'invalid';
    return;
  }
  inputText.className = 'valid';
}
