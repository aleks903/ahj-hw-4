export default function paySystem(numCard) {
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