const isPrime = (n) => {
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i < n / 2; i = i + 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const isFactor = (n, factor) => {
  if (n % factor === 0) {
    return true;
  }
  return false;
};
function primes(arrayOfPrimes) {
  return arrayOfPrimes.filter(isPrime).sort((a, b) => a - b);
}

function factors(arrayOfNums) {
  let knownPrimes = {};
  let knownFactors = {};
  const result = [];
  for (let num of arrayOfNums) {
    const factorArray = [];
    if (num % 2 === 0) {
      factorArray.push(2);
    }
    for (let i = 3; i < num - 2; i += 2) {
      if (!knownPrimes[i]) {
        knownPrimes[i] = isPrime(i);
      }
      if (!knownFactors[i]) {
        knownFactors[i] = isFactor(num, i);
      }
      if (knownPrimes[i] && knownFactors[i]) {
        factorArray.push(i);
        result.push(factorArray);
      }
    }
  }
  return result;
}
