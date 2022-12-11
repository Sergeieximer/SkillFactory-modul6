function sum(x) {
  return function(y) {
    return x + y;
  };
}

let f = sum(10);
console.log( f(5));

console.log( sum(1)(2));
