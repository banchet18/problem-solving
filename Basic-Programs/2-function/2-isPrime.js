// given a number x, write a function to determine whether the number is a prime number or not?

function isPrime(x) {
  for (let i = 2; i <= x - 1; i++) {
    if (x % i == 0) {
      return "false";
    }
  }
  return true;
}
console.log(isPrime(10));
console.log(isPrime(15));
console.log(isPrime(13));
