const formCard = document.querySelector('.valid-card');
const inputText = document.getElementById('input');

formCard.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(validateCard('371449635398431'));
  console.log('submit');
});

inputText.addEventListener('keypress', (event) => {
  event.preventDefault();
  if(event.key.search(/\d/) !== -1) {
    inputText.value = inputText.value + event.key;
    cgoiceCardImg(paySystem(inputText.value));
  }

  if(event.key === 'Enter') {
    
  }
});

inputText.addEventListener('input', (event) => {
  cgoiceCardImg(paySystem(inputText.value));
});

function paySystem(numCard) {
  if(numCard.search(/^(34|37)/) !==-1) {
    return 'american';
  } else if(numCard.search(/^(36|30[0-5]|3[89]|3095)/) !==-1) {
    return 'club';
  } else if(numCard.search(/^(6[45]|6011)/) !==-1) {
    return 'discover';
  } else if(numCard.search(/^(352[89]|35[3-8][0-9])/) !==-1) {
    return 'jcb';
  } else if(numCard.search(/^(5[1-5])/) !==-1) {
    return 'mastercard';
  } else if(numCard.search(/^(220[0-4])/) !==-1) {
    return 'mir';
  } else if(numCard.search(/^(4)/) !==-1) {
    return 'visa';
  }
  return false;
}

function cgoiceCardImg(card) {
  const imgCards = document.getElementsByClassName('img-card');
  for(const item of imgCards) {
    item.style.opacity = 0.4;
  }
  if (card) {
    const activCard = document.getElementById(card);
    activCard.style.opacity = 1;
  }

}

function validateCard(numCard) {
  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  for (let i = numCard.length - 1; i >= 0; i -=1) {
    let cDigit = numCard[i];
    nDigit = parseInt(cDigit, 10);
    if (bEven) {
      if((nDigit *= 2) > 9) nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) == 0;
}

// // /// takes the form field value and returns true on valid number
// function valid_credit_card(value) {
//   // accept only digits, dashes or spaces
  
//   // The Luhn Algorithm. It's so pretty.
//       var nCheck = 0, nDigit = 0, bEven = false;
  
//       for (var n = value.length - 1; n >= 0; n--) {
//           var cDigit = value.charAt(n),
//               nDigit = parseInt(cDigit, 10);
  
//           if (bEven) {
//               if ((nDigit *= 2) > 9) nDigit -= 9;
//           }
  
//           nCheck += nDigit;
//           bEven = !bEven;
//       }
  
//       return (nCheck % 10) == 0;
//   }