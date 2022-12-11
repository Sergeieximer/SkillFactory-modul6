function anyNumber(num) {
  let _true = 'число простое', _false = 'данные неверны';
  if (num <= 1 && num > 1000) return _false;
  if (num === 2) return _true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return _false;
    }
  }
  return _true;
}
console.log(anyNumber(10000));
console.log(anyNumber(43));
