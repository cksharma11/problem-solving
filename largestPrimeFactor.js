const findPrimeFactor = function(number){
  let primeFactors;
  for(let divisor = 3; divisor <= number; divisor+=2){
    if(number % divisor == 0){
      primeFactors = divisor;
      number = number / divisor;
      divisor=1;
    }
  }
  return primeFactors;
}
console.log(findPrimeFactor(600851475143));
