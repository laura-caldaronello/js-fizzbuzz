// metodo 1
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
// /metodo 1

// metodo 2
var numeri = [];
for (var i = 0; i < 100; i++) {
  numeri[i] = i + 1;
}
var i = 2;
while (i < 100) {
  numeri[i] = 'Fizz';
  i = i + 3;
}
var i = 4;
while (i < 100) {
  if (parseInt(numeri[i]) == numeri[i]) {
    numeri[i] = 'Buzz';
  }
  else {
    numeri[i] += 'Buzz';
  }
  i = i + 5;
}
console.log(numeri);
// /metodo 2
