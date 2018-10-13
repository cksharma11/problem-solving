const findSumOfEvenValues = function(limitOfValue){
  let sum = 2;
  let firstTerm = 0;
  let secondTerm = 2
  let nextTerm = 0;

  while(nextTerm < limitOfValue){
    sum += nextTerm;
    nextTerm = (4 * secondTerm)+firstTerm;

    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }
  return sum;
}
console.log(findSumOfEvenValues(4000000));
