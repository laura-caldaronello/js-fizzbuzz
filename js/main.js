var numeri = [];
for (var i = 0; i < 100; i++) {
  if ((i + 1) % 3 == 0 && (i + 1) % 5 != 0) {
    numeri[i] = 'Fizz';
  }
  else if ((i + 1) % 5 == 0 && (i + 1) % 3 != 0) {
    numeri[i] = 'Buzz';
  }
  else if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
    numeri[i] = 'FizzBuzz';
  }
  else {
    numeri[i] = i + 1;
  }
}
console.log(numeri);