function numbInterval5_15() {
  let i = 5;
  let timerId = setInterval(function() {
    console.log(i);
    if (i === 15) clearInterval(timerId);
    i++;
  }, 1000);
}

// вызов
numbInterval5_15();
