//Q3 write a program to print all the even numbers greater than 1 and less than 25.

for (let i = 1; i < 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i < 25; i = i + 2) {
  if (i !== 0) console.log(i);
}
