export default function validateNum(numCard) {
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
