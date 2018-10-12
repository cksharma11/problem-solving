const isDivisiblebyThreeOrFive = function(number){
  if(number % 3 == 0 || number % 5 ==0){
    return number;
  }
  return 0;
}

const main = function(){
  let nthTerm = 10;
  let sum = 0;
  for(let count = 1; count < nthTerm; count++){
    sum += isDivisiblebyThreeOrFive(count);
  }
  console.log(sum);
}
main();
