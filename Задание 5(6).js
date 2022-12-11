let arr = function(x, n) {
  for (let i = 2; i <= n; i++) {
    x *= x;
  }
  return x;
};

let x = prompt('x?', 5);
let n = prompt('n?', 3);

alert(arr(x, n));
