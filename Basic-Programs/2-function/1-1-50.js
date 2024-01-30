// Q which numbers are odd and which are even between 1-50

function isEvenOdd(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

for (let i = 1; i <= 50; i++) {
  console.log(i, "is", isEvenOdd(i));
}
