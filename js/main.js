var numeri = [];
for (var i = 0; i < 100; i++) {
  if ((i + 1) % 3 == 0) {
    numeri[i] = 'Fizz';
  }
  else if ((i + 1) % 5 == 0) {
    numeri[i] = 'Buzz';
  }
  else {
    numeri[i] = i + 1;
  }
}
console.log(numeri);